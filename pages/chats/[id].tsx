import React, { useContext, useEffect } from 'react';
import withAuth from '../../HOC/withAuth';
import { Grid, TextareaAutosize, Avatar, CardHeader, Card } from "@material-ui/core"
import { Context } from './../_app';
import { observer } from 'mobx-react-lite';
import MyMessage from '../../components/Chat/MyMessage/MyMessage';
import Message from '../../components/Chat/Message/Message';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ChatsStyles from '../../styles/chats.style';
import ChatList from '../../components/Chat/ChatList/ChatList';

const chat = () => {
    const { store } = useContext(Context)
    const classes = ChatsStyles()
    const chatBottomDiv = React.createRef<HTMLDivElement>();

    useEffect(() => {
        if (chatBottomDiv.current) {
            chatBottomDiv.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [])

    return (
        <Grid className={classes.content} container>

            <ChatList store={store} sm={12} lg={2} mbVisible={false}/>

            <Grid item sm={12} lg={5} className={classes.messages}>
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
                        <MyMessage>Abobe</MyMessage>
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
        </Grid>
    );
}

export default observer(chat);
