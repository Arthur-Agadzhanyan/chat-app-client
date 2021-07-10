import { LoginResponse } from '../models/response/LoginResponse';
import { API_URL } from './../http/index';
import { makeAutoObservable } from 'mobx';
import $api from '../http';
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

    async signup(firstName: string,lastName:string, email:string, password: string){
        try{
            
            const response = await AuthService.signup(firstName,lastName, email, password)
            // console.log({firstName,lastName,email,password})
            // console.log(response)
            this.setUser(response.data)
            this.setLoginError({} as LoginError)
            this.setAuth(true)
        }catch(e: any){
            const errorObj: LoginError = e.response?.data.data
            this.setLoginError(errorObj)
            console.log(errorObj)
        }
    }

    async login(email: string, password: string) {
        try{
            const response = await AuthService.login(email, password)
            console.log(response.data)

            localStorage.setItem('token',response.data.accessToken)
            localStorage.setItem('refreshToken',response.data.refreshToken)

            this.setUser(response.data)
            this.setLoginError({} as LoginError)
            this.setAuth(true)
            
        }catch(e: any){
            const errorObj: LoginError = e.response?.data.data
            this.setLoginError(errorObj)
            console.log(errorObj)
        }
    }

    async logout(){
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('token')

        this.setUser({} as User)
        this.setAuth(false)
    }

    async verify(){
        const response = await AuthService.logout()
    }

    async checkAuth() {
        try {
            const refreshToken = localStorage.getItem('refreshToken')

            const response = await axios.patch(`${API_URL}/refresh`,{}, {
                headers:{ 
                    "Authorization": `Bearer ${refreshToken}`
                }
            })
            const data = response.data

            localStorage.setItem('token', data.accessToken)
            localStorage.setItem('refreshToken', data.refreshToken)
            this.setAuth(true)
        } catch (e: any) {
        } finally{
            this.setLoading(false)
        }
    }
}