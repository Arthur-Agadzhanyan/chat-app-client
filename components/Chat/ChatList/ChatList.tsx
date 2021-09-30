import { Grid, TextField} from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import { ChatListStyles } from './chat-list.style';
import { ChatListProps } from './interfaces';

const ChatList: FC<ChatListProps> = ({ store, xs, sm, md,lg, mbVisible }) => {
    const classes = ChatListStyles(mbVisible)()
    const [chats, setChats] = useState([]);

    useEffect(()=>{
        const res = store.getChatList().then(data=>{
            setChats(data)
        })
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
                {
                    chats && chats.map((chat,i)=>{
                        // <ChatLink username={"Tim Berners Lee"} chatLink={"2131231243214"} />
                        <h1 key={`${chat}_${i}`}>{JSON.stringify(chat)}</h1>
                    })
                }
            </div>


        </Grid>
    );
}

export default ChatList;
