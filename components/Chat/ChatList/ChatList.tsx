import { Grid, TextField, makeStyles, Theme, createStyles } from '@material-ui/core';
import React, { FC } from 'react';
import ChatLink from '../../ChatLink/ChatLink';
import { ChatListProps } from './interfaces';

const ChatList: FC<ChatListProps> = ({ store, xs, sm, md,lg, mbVisible }) => {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            chats: {
                // display: "none",
                background: "#fff",
                height: "98%",
                paddingTop: 15,
                border: "1px solid #ccc",
                [theme.breakpoints.down('xs')]: {
                    display: mbVisible ? "block" : "none",
                    [theme.breakpoints.down('sm')]: {
                        height: "100%",
                        width: "100%",
                    }
                }
            },
            chatSearch: {
                width: "90%",
                height: "10%",
                margin: "0 auto",
                
                [theme.breakpoints.down('xs')]: {
                    display: mbVisible ? "block" : "none"
                }
            },
            chatSearchInput:{
                width: "100%"
            },
            chatList: {
                height: "90%",
                overflowY: "auto",
                overflowX: "hidden"
            },
        }),
    );
    const classes = useStyles()

    const searchUsers = () => {
        alert("Search")
    }

    const logout = () => {
        console.log(store.logout())
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
                <div>
                    <button onClick={logout}>Выход</button>
                </div>
            </div>


        </Grid>
    );
}

export default ChatList;
