import { Friend } from './../../../models/Friend';
import { ReactNode } from 'react';
export interface SendMsgModalProps{
    
    open: boolean, 
    user: Friend,
    handleClose():void, 
}