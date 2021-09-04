import { ReactNode } from 'react';
export interface SendMsgModalProps{
    open: boolean, 
    children: ReactNode
    handleOpen():void, 
    handleClose():void, 
}