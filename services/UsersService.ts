import { AxiosResponse } from "axios";
import $api from "../http";

export default class UsersService {
    static async getAllUsers(page: number = 1, limit: number = 10): Promise<AxiosResponse> {
        console.log(`/users?limit=${limit}&page=${page}`)
        return $api.get(`/users?limit=${limit}&page=${page}`)
    }
}
