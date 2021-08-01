export interface VerifyResponse {
    _id: string,
    message: string,
    email: string,
    firstName: string,
    lastName: string,
    verified: boolean,
    accessToken: string,
    refreshToken: string,
    length: number
}