import React, { FC, useEffect } from 'react';
import MyMessage from '../MyMessage/MyMessage';
import Message from '../Message/Message';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { Avatar, Card, CardHeader, Grid, TextareaAutosize } from '@material-ui/core';
import MessageListStyles from './messagelist.style';
import { MessageListProps } from './interfaces';

const MessageList: FC<MessageListProps> = ({store,sm,lg,md,xs}) => {
    const chatBottomDiv = React.createRef<HTMLDivElement>();
    const classes = MessageListStyles()

    useEffect(() => {
        if (chatBottomDiv.current) {
            chatBottomDiv.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [])
    return (
        <Grid item xs={xs} sm={sm} md={md} lg={lg} className={classes.messages}>
                <div className={classes.chatHeader}>
                    <Card elevation={0}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" color="primary" className={classes.headerAvatar}>
                                    {"aboba"[0].toUpperCase()}
                                </Avatar>
                            }
                            title={`Aboba Николаевич`}
                        />
                    </Card>
                </div>
                <div className={classes.messageContainer}>
                    <div className={classes.messageList}>
                        <MyMessage>, mollitia corrupti reprehenderit obcaecati quo dolorem, perferendis quas, enim consequuntur!</MyMessage>
                        <Message>Abobe</Message>
                        <Message>Abobe</Message>
                        <MyMessage>Abobe</MyMessage>
                        <MyMessage>Abobe</MyMessage>
                        <Message>Abobe</Message>
                        <MyMessage>Abobe</MyMessage>
                        <Message>Abobe</Message>
                        <Message>Abobe</Message>
                        <MyMessage>AbobeAbobeAbobeAbobeAbobeAbobeAbobeAbobeAbobeAbobeAbobe</MyMessage>
                        <MyMessage>Abobe</MyMessage>
                        <Message>AbobeAbobeAbobeAbobeAbobeAbobeAbobeAbobeAbobeAbobeAbobeAbobe</Message>
                        <Message>Abobe</Message>
                        <Message>Abobe</Message>
                        <div ref={chatBottomDiv} className="odd"></div>
                    </div>
                </div>
                <div className={classes.inputContainer}>
                    <div className={classes.inputBorder}>
                        <div className={classes.attachFile}>
                            <AttachFileIcon />
                        </div>
                        <div className={classes.messageInputContainer}>
                            <TextareaAutosize
                                rowsMax={4}
                                aria-label="maximum height"
                                placeholder="Напишите сообщение"
                                className={classes.messageInput}

                            />
                        </div>
                        <div className={classes.sendMessage}>Отправить</div>
                    </div>
                </div>
            </Grid>
    );
}

export default MessageList;
