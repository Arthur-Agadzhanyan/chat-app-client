import { Grid, TextField, makeStyles, Theme, createStyles } from '@material-ui/core';
import React, { FC } from 'react';
import ChatLink from '../../ChatLink/ChatLink';
import { ChatListProps } from './interfaces';

const ChatList: FC<ChatListProps> = ({ store, sm, lg, mbVisible }) => {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            chats: {
                // display: "none",
                background: "#fff",
                height: "98%",
                paddingTop: 15,
                border: "1px solid #ccc",
                [theme.breakpoints.down('xs')]: {
                    display: mbVisible ? "block" : "none"
                }
            },
            chatSearch: {
                width: "270px",
                margin: "5px 15px",
                height: "10%",
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
        <Grid item sm={sm} lg={lg} className={classes.chats}>

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
                <ChatLink username={"Gucci Boss"} chatLink={"2131231243214"} />
                <ChatLink username={"Bill Gates"} chatLink={"2131231243214"} />
                <ChatLink username={"Mark Zuckerberg"} chatLink={"2131231243214"} />
                <ChatLink username={"Jeff Bezos"} chatLink={"2131231243214"} />
                <ChatLink username={"Elon Musk"} chatLink={"2131231243214"} />
                <ChatLink username={"Ronald Wayne"} chatLink={"2131231243214"} />
                <ChatLink username={"Анатолий"} chatLink={"2131231243214"} />
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
