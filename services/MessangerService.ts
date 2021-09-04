import { AxiosResponse } from "axios";
import $api from "../http";

export default class MessangerService {
    static async getChatList(): Promise<AxiosResponse> {
        return $api.get(`/messenger/chats`)
    }

    static async getChat(id: string): Promise<AxiosResponse> {
        return $api.get(`/messenger/chat/${id}`)
    }
}