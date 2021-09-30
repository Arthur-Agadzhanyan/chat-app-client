import { makeAutoObservable } from 'mobx';
import MessangerService from '../services/MessangerService';

export default class ChatsStore {
    messages: any = []

    constructor() {
        makeAutoObservable(this)
    }

    setMessages(msgs: any){
        this.messages = msgs
    }

    // Получение списка чатов
    async getChatList(){
        try {
            const response = await MessangerService.getChatList()
            console.log(response)

            return response.data
        } catch (e) {
            console.log(e)
        }
    }

    // Получение сообщений отдельного чата
    async getChat(id: string){
        try {
            const response = await MessangerService.getChat(id)
            console.log("getChat",response.data)

            this.setMessages(response.data.messages)
        } catch (e) {
            console.log(e)
        }
    }

    // Отправка сообщений конкретному пользователю на страницах /users и /friends (используем receivers)
    async sendPrivateMessage(message: string, receivers: string[]){
        try {
            const response = await MessangerService.sendPrivateMessage(message,receivers)
            // console.log(response.data)

            return response.data
        } catch (e) {
           console.log(e);
            
        }
    }

    // Отправка сообщений внутри чата (используем chatId)
    async sendMessageOnChat(message: string, chatId: string, type: "100" | "200"){
        try {
            const response = await MessangerService.sendMessageOnChat(message,chatId,type)
            console.log(response.data)

            this.setMessages([...this.messages, ...response.data.messages])
        } catch (e: any) {
           console.log(e);
            
        }
    }
}