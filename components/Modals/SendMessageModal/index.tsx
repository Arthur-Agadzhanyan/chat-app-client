import { Modal } from 'react-responsive-modal';
import React, { ChangeEvent, FC, FormEvent, useContext, useState } from 'react';
import { SendMsgModalProps } from './interfaces';

import 'react-responsive-modal/styles.css';
import SendMsgModalStyles from './send-msg-modal.style';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Button } from '@material-ui/core';
import { Context } from '../../../pages/_app';
import { useRouter } from 'next/router';

const SendMessageModal: FC<SendMsgModalProps> = ({open, handleClose, user}) => {
    const classes = SendMsgModalStyles()

    const Router = useRouter()

    const [message, setMessage] = useState("");
    const {store:{chats}} = useContext(Context)

    const sendMessage = (e: FormEvent)=>{
        e.preventDefault()
        if(!message.trim()){
            console.log("Сообщение не должно быть пустым");
            setMessage("")
            return
        }

        console.log(message)
        chats.sendPrivateMessage(message, [user._id]).then((data)=>{
            Router.push(`/chats/${data._id}`)
        })
    }
    
    const changeMessage = (e: ChangeEvent<HTMLTextAreaElement>)=>{
        setMessage(e.target.value)
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            classNames={{
                modal: classes.modal,
                closeButton: classes.modal__close
            }}
            center
        >
            <>
                <div>
                    <div className={classes.modal__header}>
                        <h2 className={classes.modal__title}>Новое сообщение</h2>
                    </div>
                    <div className={classes.modal__content}>
                        <h3 className={classes.content__name}>{user.firstName} {user.lastName}</h3>
                    </div>
                    <form className={classes.modal__form} onSubmit={sendMessage}>
                        <TextareaAutosize className={classes.form__textarea} aria-label="minimum height" rowsMin={6} rowsMax={8} value={message} onChange={changeMessage}/>
                        <div className={classes.form__controls}>
                            <span>Скоро</span>
                            <Button className={classes.controls__button} variant="contained" color="primary" type="submit" disableElevation>Отправить</Button>
                        </div>
                    </form>
                </div>
            </>
        </Modal>
    );
}

export default SendMessageModal;
