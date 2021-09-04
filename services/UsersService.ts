import { AxiosResponse } from "axios";
import $api from "../http";

export default class UsersService {
    static async getUsers(url: string, page: number, limit: number,fromAge:string,toAge:string,location: string | null, name: string): Promise<AxiosResponse> {

        const usersLocation = location ? `&location=${location}` : ""
        const usernames = name ? `&name=${name}` : ""

        console.log(`/${url}?limit=${limit}&page=${page}&fromAge=${fromAge}&toAge=${toAge}${usersLocation}${usernames}`);        

        return $api.get(`/${url}?limit=${limit}&page=${page}&fromAge=${fromAge}&toAge=${toAge}${usersLocation}${usernames}`)
    }

    static async sendFriendRequest(receiverId: string): Promise<AxiosResponse> {
        console.log(`/friend-request`)
        return $api.post(`/friend-request`,{receiverId})
    }
}
