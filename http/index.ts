import { LoginResponse } from '../models/response/LoginResponse';
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const API_URL: string = 'http://localhost:8000/api/v1'

const $api = axios.create({
    withCredentials: true, // для отправки куки
    baseURL: API_URL
})

if(typeof window !== "undefined"){
    $api.interceptors.request.use((successReq: AxiosRequestConfig)=>{
        successReq.headers.Authorization = `Bearer ${localStorage.getItem('token')}` // к каждому нашему запросу прикрепляем наш access токен
        return successReq
    })
}

$api.interceptors.response.use((successRes: AxiosResponse)=>{ // срабатывает каждый раз когда мы получаем ответ
    return successRes
}, async (error)=>{ // если статус 401 (например access токен истек)
    const originalRequest = error.config
    if (error.response.status == 401 && error.config && originalRequest._isRetry !== true) {
        originalRequest._isRetry = true
        try {
            const response = await axios.post<LoginResponse>(`${API_URL}/refresh`, { withCredentials: true })
            localStorage.setItem('token', response.data.accessToken)
            return $api.request(originalRequest)// продолжаем запрос как это было в схеме) 
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН');
        }
    }
    throw error;
}) // в метод .use мы можем передать 2 функции: первая сработает при успешном ответе, вторая при ошибке 

export default $api