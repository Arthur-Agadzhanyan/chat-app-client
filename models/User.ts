import { Friend } from './Friend';

export interface VerifiedUser{
    _id: string,
    email: string,
    firstName: string,
    lastName: string,
    birthday: string,
    location: string,
    friends: Friend[],
    incomingFriendRequests: Friend[],
    outgoingFriendRequests: Friend[],
    verified: boolean,
    settings: {
        message: "all" | "private" | "friends"
    },
    accessToken?: string,
    refreshToken?: string,

    length: number
}

export interface NotVerifiedUser{
    _id: string,
    message: string,
    email: string,
    firstName: string,
    lastName: string,
    verified: boolean,
    length: number
}