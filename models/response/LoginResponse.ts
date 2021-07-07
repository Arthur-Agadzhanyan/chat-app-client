export interface LoginResponse{
    message: string,
    email: string,
    firstName: string,
    lastName: string,
    verified: boolean,
    accessToken: string,
    refreshToken: string
}