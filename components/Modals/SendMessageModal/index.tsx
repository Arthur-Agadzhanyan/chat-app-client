import { Modal } from '@material-ui/core';
import React, { FC } from 'react';
import { SendMsgModalProps } from './interfaces';
import SendMsgModalStyles from './send-msg-modal.style';

const SendMessageModal: FC<SendMsgModalProps> = ({open, handleOpen, handleClose, children}) => {
    const classes = SendMsgModalStyles()

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <>
                {children}
            </>
        </Modal>
    );
}

export default SendMessageModal;
