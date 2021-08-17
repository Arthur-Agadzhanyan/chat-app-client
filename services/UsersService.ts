import { AxiosResponse } from "axios";
import $api from "../http";

export default class UsersService {
    static async getUsers(page: number, limit: number,fromAge:string,toAge:string,location: string | null): Promise<AxiosResponse> {
        console.log(`/users?limit=${limit}&page=${page}&fromAge=${fromAge}&toAge=${toAge}${location ? `&location=${location}` : ""}`)
        return $api.get(`/users?limit=${limit}&page=${page}&fromAge=${fromAge}&toAge=${toAge}${location ? `&location=${location}` : ""}`)
    }

    static async sendFriendRequest(receiverId: string): Promise<AxiosResponse> {
        console.log(`/friend-request`)
        return $api.post(`/friend-request`,{receiverId})
    }
}
