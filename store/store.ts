import { AuthResponse } from './../models/response/AuthResponse';
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

    async registration(username: string, email:string, password: string){
        try{
            const response = await AuthService.registration(username, email, password)
            localStorage.setItem('token', response.data.accessToken)
            
            this.setUser(response.data.user)
            this.setAuth(true)
        }catch(e: any){
            const errorObj: LoginError = JSON.parse(e.response?.data?.message)
            this.setLoginError(errorObj)
        }
    }

    async login(email: string, password: string) {
        try{
            const response = await AuthService.login(email, password)
            console.log(response.data)

            localStorage.setItem('token',response.data.accessToken)
            this.setLoginError({} as LoginError)
            this.setAuth(true)
            this.setUser(response.data.user)
        }catch(e: any){
            const errorObj: LoginError = JSON.parse(e.response?.data?.message)
            this.setLoginError(errorObj)
        }
    }

    async logout(){
        const response = await AuthService.logout()
        localStorage.removeItem('token')

        this.setUser({} as User)
        this.setAuth(false)
    }

    async checkAuth() {
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true })
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {

        } finally{
            this.setLoading(false)
        }
    }
}