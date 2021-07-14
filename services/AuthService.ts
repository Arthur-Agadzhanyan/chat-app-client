import { VerifyResponse } from './../models/response/VerifyResponse';
import { SignUpResponse } from './../models/response/SignUpResponse';
import { LoginResponse } from '../models/response/LoginResponse';
import { AxiosResponse } from "axios";
import $api from "../http";

export default class AuthService {
    static async login(email: string, password: string):Promise<AxiosResponse<LoginResponse>> {
        return $api.post<LoginResponse>('/auth/login',{email,password})
    }

    static async signup(birthday: Date | null,firstName: string, lastName:string, email: string, password: string):Promise<AxiosResponse<SignUpResponse>> {
        return $api.post<LoginResponse>('/auth/signup',{age: birthday,firstName,lastName,email,password})
    }

    static async getVerificationCode(email:string):Promise<AxiosResponse<VerifyResponse>>{
        return $api.post<VerifyResponse>("/auth/verify",{email})
    }

    static async sendVerificationCode(hash: string):Promise<AxiosResponse<VerifyResponse>>{
        return $api.patch<VerifyResponse>(`/auth/verify`,{hash})
    }
}