import { LoginResponse } from '../models/response/LoginResponse';
import { API_URL } from './../http/index';
import { makeAutoObservable } from 'mobx';
import { useRouter } from 'next/router';
import { User } from './../models/User';
import axios from 'axios';
import AuthService from '../services/AuthService';
import { LoginError } from '../models/LoginError';



export default class Store {
    user = {} as User
    isAuth = false
    isLoading = false
    loginErrors = {} as LoginError

    constructor() {
        makeAutoObservable(this)
    }
    

    setAuth(bool: boolean) { // меняет значение авторизации пользователя
        this.isAuth = bool
    }

    setUser(user: User) {
        this.user = user
    }

    setLoading(bool: boolean) {
        this.isLoading = bool
    }
    setLoginError(error: LoginError){
       this.loginErrors = error
    }

    // Для регистрации аккаунта
    async signup(firstName: string,lastName:string, email:string, password: string,location: string, birthday: Date | null){
        try{
            const response = await AuthService.signup(firstName,lastName, email, password,location,birthday)
            this.setUser(response.data)
            this.setLoginError({} as LoginError)
            this.setAuth(true)
        }catch(e: any){
            console.log(birthday)

            const errorObj: LoginError = e.response?.data.data
            this.setLoginError(errorObj)
            console.log(errorObj)
        }
    }
    // Для входа в аккаунт
    async login(email: string, password: string) {
        try{
            const response = await AuthService.login(email, password)

            localStorage.setItem('token',response.data.accessToken)
            localStorage.setItem('refreshToken',response.data.refreshToken)

            this.setUser(response.data)
            this.setLoginError({} as LoginError)
            this.setAuth(true)
            
        }catch(e: any){
            
            // if(e.response.status == 403){
            //     this.setLoginError({authError: "text"} as LoginError)
            // }
            const errorObj: LoginError = e.response?.data.data
            this.setLoginError(errorObj)
            console.log(e.response?.data.data)

        }
    }

    // Для запроса отправки кода подтверждения аккаунта на почту
    async getVerificationCode(setSuccess: Function,setError:Function){
        try {
            const response = await AuthService.getVerificationCode(this.user.email)
            setSuccess(response.data)     
        } catch (e:any) {
            setError(e.response?.data)
        }
    }

    async sendVerificationCode(setSuccess: Function,setError:Function, hash:string){
        try{
            const response = await AuthService.sendVerificationCode(hash)
            console.log(response)
            setSuccess("success")
            this.user.verified = true
        }catch(e:any){
            console.log(e)
            setError(e.response?.data)
        }
        
    }

    logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        this.setUser({} as User)
        this.setAuth(false)
    }

    // Для обновления jwt access & refresh токенов
    async checkAuth() {
        try {
            const refreshToken = localStorage.getItem('refreshToken')

            const response = await axios.patch(`${API_URL}/auth/refresh`,{}, {
                headers:{ 
                    "Authorization": `Bearer ${refreshToken}`
                }
            })
            const data = response.data

            localStorage.setItem('token', data.accessToken)
            localStorage.setItem('refreshToken', data.refreshToken)
            this.setUser(response.data as User)
            this.setAuth(true)
        } catch (e: any) {
        } finally{
            this.setLoading(false)
        }
    }
}