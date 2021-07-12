export interface User{
    email: string,
    firstName: string,
    lastName: string,
    verified: boolean,
    accessToken?: string,
    refreshToken?: string
}