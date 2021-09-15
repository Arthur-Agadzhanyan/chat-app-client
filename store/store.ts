import { API_URL } from './../http/index';
import { makeAutoObservable } from 'mobx';
import { VerifiedUser, NotVerifiedUser } from './../models/User';
import $api from '../http/index';
import AuthService from '../services/AuthService';
import UsersService from '../services/UsersService';
import { LoginError } from '../models/LoginError';
import MessangerService from '../services/MessangerService';

export default class Store {
    user = {} as VerifiedUser | NotVerifiedUser
    isAuth = false
    isLoading = false
    loginErrors = {} as LoginError

    //TEST
    messages: any = []

    constructor() {
        makeAutoObservable(this)
    }
    
    setAuth(bool: boolean) { // меняет значение авторизации пользователя
        this.isAuth = bool
    }

    setUser(user: VerifiedUser | NotVerifiedUser) {
        this.user = user
    }

    setLoading(bool: boolean) {
        this.isLoading = bool
    }
    setLoginError(error: LoginError){
       this.loginErrors = error
    }

    //TEST
    setMessages(msgs: any){
        this.messages = msgs
    }

    // Для регистрации аккаунта
    async signup(firstName: string,lastName:string, email:string, password: string,location: string, birthday: Date | null){
        try{
            const response = await AuthService.signup(firstName,lastName, email, password,location,birthday)
            
            // console.log(response)
            this.setUser(response.data)
            this.setLoginError({verifyError: "Аккаунт не подтверждён"} as LoginError)
            this.setAuth(true)

        } catch(e: any){
            console.log(birthday)

            const errorObj: LoginError = e.response?.data.data
            this.setLoginError(errorObj)
        }
    }
    // Для входа в аккаунт
    async login(email: string, password: string) {
        try{
            const response = await AuthService.login(email, password)

            localStorage.setItem('token',response.data.accessToken)
            console.log(response)

            this.setUser(response.data)
            this.setLoginError({} as LoginError)
            this.setAuth(true)
            
        }catch(e: any){       
            if(e.response.status == 403){
                const errorObj: LoginError = e.response?.data.data

                this.setUser({email: e.response.data.email,firstName: e.response.data.firstName,verified: e.response.data.verified} as NotVerifiedUser)
                this.setAuth(true)

                return this.setLoginError({...errorObj, verifyError: "Аккаунт не подтверждён"})
            }

            const errorObj: LoginError = e.response?.data.data

            this.setLoginError(errorObj)
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

    async sendVerificationCode(setSuccess: Function,setError: Function, hash: string){
        try{
            const response = await AuthService.sendVerificationCode(hash)
            const data = response.data
            console.log(data)
            setSuccess("success")

            localStorage.setItem('token', data.accessToken)

            this.setUser(response.data)
            this.setAuth(true)
        }catch(e:any){
            console.log(e)
            setError(e.response?.data)
        }
        
    }

    logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')

        this.setUser({} as NotVerifiedUser)
        this.setAuth(false)
    }

    // Для обновления jwt access & refresh токенов
    async checkAuth() {
        this.setLoading(true)
        try {
            const response = await $api.post(`${API_URL}/auth/refresh`,{})
            const getUserData = await $api.post(`${API_URL}/auth/check`,{})
            const data = response.data

            console.log(data)

            localStorage.setItem('token', data.accessToken)

            this.setUser({...getUserData.data})
            this.setAuth(true)
        } catch (e: any) {
            console.log(e.response?.data)
        } finally{
            this.setLoading(false)
        }
    }

    // для отображения пользователей
    async getUsers(url: string = "users",page: number = 1, limit: number = 10,fromAge: string = "14", toAge:string = "80", location: string | null, name: string){
        try{
            const response = await UsersService.getUsers(url,page,limit,fromAge,toAge,location,name)
            console.log(response.data)

            return response.data
        }catch(e){
            console.log(e)
        }
    }

    async sendFriendRequest(receiverId: string){
        try {
            const response = await UsersService.sendFriendRequest(receiverId)

            console.log(receiverId)
            console.log(response.data)
        } catch (e: any) {
            console.log(e.response?.data)
        }
    }

    async getChatList(){
        try {
            const response = await MessangerService.getChatList()
            console.log(response)

            return response.data
        } catch (e) {
            console.log(e)
        }
    }

    async getChat(id: string){
        try {
            const response = await MessangerService.getChat(id)
            console.log("getChat",response.data)

            this.setMessages(response.data.messages)
        } catch (e) {
            console.log(e)
        }
    }

    async sendPrivateMessage(message: string, receivers: string[]){
        try {
            const response = await MessangerService.sendPrivateMessage(message,receivers)
            // console.log(response.data)

            return response.data
        } catch (e) {
           console.log(e);
            
        }
    }

    async sendMessageOnChat(message: string, chatId: string, type: "100" | "200"){
        try {
            const response = await MessangerService.sendMessageOnChat(message,chatId,type)
            // console.log(response.data)

            this.setMessages([...this.messages, ...response.data.messages])
        } catch (e: any) {
           console.log(e);
            
        }
    }
}