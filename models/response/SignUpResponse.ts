export interface SignUpResponse {
    _id: string,
    message: string,
    email: string,
    firstName: string,
    lastName: string,
    verified: boolean,
    length: number
}