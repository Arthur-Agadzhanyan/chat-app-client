import { AuthResponse } from './../models/response/AuthResponse';
import { API_URL } from './../http/index';
import { makeAutoObservable } from 'mobx';
import $api from '../http';
import { User } from './../models/User';
import axios from 'axios';

export default class Store {
    user = {} as User
    isAuth = false
    isLoading = false

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

    async login(email: string, password: string) {
        try{
            const response = await $api.post(`${API_URL}/login`,{
                password,email
            })
            console.log(response)
            localStorage.setItem('token',response.data.accessToken)

            this.setUser(response.data.user)
            this.setAuth(true)

        }catch(e: any){
            console.log(e.response?.data?.message)
        }
    }

    async logout(){
        const response = await $api.post(`${API_URL}/logout`)
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