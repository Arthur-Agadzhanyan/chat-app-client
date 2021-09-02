import { AxiosResponse } from "axios";
import $api from "../http";

export default class UsersService {
    static async getUsers(page: number, limit: number,fromAge:string,toAge:string,location: string | null, name: string): Promise<AxiosResponse> {

        console.log(`/users?limit=${limit}&page=${page}&fromAge=${fromAge}&toAge=${toAge}${location ? `&location=${location}` : ""}&name=anton`)

        const usersLocation = location ? `&location=${location}` : ""
        const usernames = name ? `&name=${name}` : ""

        return $api.get(`/users?limit=${limit}&page=${page}&fromAge=${fromAge}&toAge=${toAge}${usersLocation}${usernames}`)
    }

    static async sendFriendRequest(receiverId: string): Promise<AxiosResponse> {
        console.log(`/friend-request`)
        return $api.post(`/friend-request`,{receiverId})
    }
}
