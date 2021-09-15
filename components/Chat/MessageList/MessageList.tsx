import React, { ChangeEvent, FC, useEffect,useState } from 'react';
import MyMessage from '../MyMessage/MyMessage';
import Message from '../Message/Message';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { Avatar, Card, CardHeader, Grid, TextareaAutosize } from '@material-ui/core';
import MessageListStyles from './messagelist.style';
import { ChatMessage, MessageListProps } from './interfaces';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';

const MessageList: FC<MessageListProps> = ({store,sm,lg,md,xs}) => {
    const router = useRouter()
    const chatBottomDiv = React.createRef<HTMLDivElement>();
    const classes = MessageListStyles()
    const { id } = router.query

    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState("");


    useEffect(() => {
        if (chatBottomDiv.current) {
            chatBottomDiv.current.scrollIntoView({ behavior: "smooth" });
        }
        if(id){
            store.getChat(id as string)
        }
    }, [id])

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>)=>{
        setMessageInput(e.target.value)
    }

    const sendMessage = ()=>{
        if(messageInput.trim()){
            store.sendMessageOnChat(messageInput,id as string, "100")
        }
    }

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
                        {store.messages && store.messages.map((msg: ChatMessage,i:number)=>{
                            // TODO: Сделать модель для сообщения
                            if(store.user._id === msg.author._id){
                                return <MyMessage key={`${msg}_${i}`} msg={msg}/>
                            }
                            return <Message key={`${msg}_${i}`} msg={msg}/>
                        })}
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
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={classes.sendMessage} onClick={sendMessage}>Отправить</div>
                    </div>
                </div>
            </Grid>
    );
}

export default observer(MessageList);
