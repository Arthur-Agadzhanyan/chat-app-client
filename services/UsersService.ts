import { AxiosResponse } from "axios";
import $api from "../http";

export default class UsersService {
    static async getAllUsers():Promise<AxiosResponse> {
        return $api.get('/users')
    }
}
