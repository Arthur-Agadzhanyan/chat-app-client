import { Grid, TextField, makeStyles, Theme, createStyles } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import ChatLink from '../../ChatLink/ChatLink';
import { ChatListStyles } from './chat-list.style';
import { ChatListProps } from './interfaces';

const ChatList: FC<ChatListProps> = ({ store, xs, sm, md,lg, mbVisible }) => {
    const classes = ChatListStyles(mbVisible)()
    const [chats, setChats] = useState([]);

    useEffect(()=>{
        const res = store.getChatList()
        console.log(res)
    },[])

    const searchUsers = () => {
        alert("Search")
    }

    return (
        <Grid item xs={xs} sm={sm} md={md} lg={lg} className={classes.chats}>

            <form onSubmit={searchUsers} className={classes.chatSearch}>
                <TextField
                    className={classes.chatSearchInput}
                    label="Поиск"
                    id="search"
                    variant="standard"
                />
            </form>

            <div className={classes.chatList}>
                <ChatLink username={"Tim Berners Lee"} chatLink={"2131231243214"} />
                <ChatLink username={"Gucci Boss"} chatLink={"2131231243214"} />
                <ChatLink username={"Bill Gates"} chatLink={"2131231243214"} />
                <ChatLink username={"Mark Zuckerberg"} chatLink={"2131231243214"} />
                <ChatLink username={"Jeff Bezos"} chatLink={"2131231243214"} />
                <ChatLink username={"Elon Musk"} chatLink={"2131231243214"} />
                <ChatLink username={"Ronald Wayne"} chatLink={"2131231243214"} />
                <ChatLink username={"Lorem ipsum dolor sit amet consectetur adi"} chatLink={"2131231243214"} />
                <ChatLink username={"Elon Musk"} chatLink={"21312312414"} />
                <ChatLink username={"Elon Musk"} chatLink={"2131231243214"} />
                <ChatLink username={"Elon Musk"} chatLink={"2131231243214"} />
                <ChatLink username={"Elon Musk"} chatLink={"2131231243214"} />
                <ChatLink username={"Elon Musk"} chatLink={"2131231243214"} />
                <ChatLink username={"Elon Musk"} chatLink={"2131231243214"} />
                <ChatLink username={"Elon Musk"} chatLink={"2131231243214"} />
                <ChatLink username={"Elon Musk"} chatLink={"2131231243214"} />
                <ChatLink username={"Elon Musk"} chatLink={"2131231243214"} />
            </div>


        </Grid>
    );
}

export default ChatList;
