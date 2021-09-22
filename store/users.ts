// import { API_URL } from './../http/index';
import { makeAutoObservable } from 'mobx';
import UsersService from '../services/UsersService';


export default class UsersStore {

    constructor() {
        makeAutoObservable(this)
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

    // отправка/удаление запроса в друзья 
    async sendFriendRequest(receiverId: string){
        try {
            const response = await UsersService.sendFriendRequest(receiverId)

            console.log(receiverId)
            console.log(response.data)
        } catch (e: any) {
            console.log(e.response?.data)
        }
    }
}