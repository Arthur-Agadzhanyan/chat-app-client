import { AxiosResponse } from "axios";
import $api from "../http";

export default class UsersService {
    static async getAllUsers(page: number = 1): Promise<AxiosResponse> {
        console.log(`/users?limit=${10}&page=${page}`)
        return $api.get(`/users?limit=${10}&page=${page}`)
    }
}
