export interface VerifyResponse {
    message: string,
    email: string,
    firstName: string,
    lastName: string,
    verified: boolean,
    accessToken: string,
    refreshToken: string,
    length: number
}