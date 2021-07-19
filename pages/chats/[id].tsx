import React, { useContext, useEffect } from 'react';
import withAuth from '../../HOC/withAuth';
import { Grid, TextField, TextareaAutosize, Avatar, CardHeader, Card } from "@material-ui/core"
import { Context } from './../_app';
import { observer } from 'mobx-react-lite';
import ChatLink from '../../components/ChatLink/ChatLink';
import MyMessage from '../../components/Chat/MyMessage/MyMessage';
import Message from '../../components/Chat/Message/Message';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ChatsStyles from '../../styles/chats.style';

const chat = () => {
    const { store } = useContext(Context)
    const classes = ChatsStyles()
    const chatBottomDiv = React.createRef<HTMLDivElement>();

    useEffect(() => {
        if (chatBottomDiv.current) {
            chatBottomDiv.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [])

    const searchUsers = () => {
        alert("Search")
    }

    return (
        <Grid className={classes.content} container>
            <Grid item sm={12} lg={2} className={classes.chats}>

                <form onSubmit={searchUsers}>
                    <TextField
                        className={classes.chatSearch}
                        label="Поиск"
                        id="search"
                        variant="standard"
                    />
                </form>

                <div className={classes.chatList}>
                    <ChatLink username={"Tim Berners Lee"} chatLink={"2131231243214"} />
                    <ChatLink username={"Gucci Boss"} chatLink={"a"} />
                    <ChatLink username={"Bill Gates"} chatLink={"2131231214"} />
                    <ChatLink username={"Mark Zuckerberg"} chatLink={"2131231243214"} />
                    <ChatLink username={"Jeff Bezos"} chatLink={"213123214"} />
                    <ChatLink username={"Elon Musk"} chatLink={"2131231243214"} />
                    <ChatLink username={"Ronald Wayne"} chatLink={"2131231243214"} />
                    <ChatLink username={"Анатолий"} chatLink={"2131231243214"} />
                    <ChatLink username={"Elon Musk"} chatLink={"2131231243214"} />
                    <ChatLink username={"Elon Musk"} chatLink={"2131231243214"} />
                    <ChatLink username={"Elon Musk"} chatLink={"2131231243214"} />
                    <ChatLink username={"Elon Musk"} chatLink={"2131231243214"} />
                    <ChatLink username={"Elon Musk"} chatLink={"2131231243214"} />
                    <ChatLink username={"Elon Musk"} chatLink={"2131231243214"} />
                    <ChatLink username={"Elon Musk"} chatLink={"2131231243214"} />
                    <ChatLink username={"Elon Musk"} chatLink={"2131231243214"} />
                    <ChatLink username={"Elon Musk"} chatLink={"2131231243214"} />
                    <div>
                        <button onClick={() => store.logout()}>Выход</button>
                    </div>
                </div>


            </Grid>
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
