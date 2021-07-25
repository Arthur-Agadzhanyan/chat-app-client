import { VerifyResponse } from './../models/response/VerifyResponse';
import { SignUpResponse } from './../models/response/SignUpResponse';
import { LoginResponse } from '../models/response/LoginResponse';
import { AxiosResponse } from "axios";
import $api from "../http";

export default class AuthService {
    static async login(email: string, password: string):Promise<AxiosResponse<LoginResponse>> {
        return $api.post<LoginResponse>('/auth/login',{email,password})
    }

    static async signup(firstName: string, lastName:string, email: string, password: string,location:string, birthday: Date | null,):Promise<AxiosResponse<SignUpResponse>> {
        return $api.post<LoginResponse>('/auth/signup',{firstName,lastName,email,password,location,birthday})
    }

    static async getVerificationCode(email:string):Promise<AxiosResponse<VerifyResponse>>{
        return $api.post<VerifyResponse>("/auth/verify",{email})
    }

    static async sendVerificationCode(hash: string):Promise<AxiosResponse<VerifyResponse>>{
        return $api.patch<VerifyResponse>(`/auth/verify`,{hash})
    }
}