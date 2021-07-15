import React, { useContext } from 'react';
import withAuth from '../HOC/withAuth';
import { createStyles, Grid, makeStyles, Theme, Card, IconButton, TextField } from "@material-ui/core"
import { Context } from './_app';
import { observer } from 'mobx-react-lite';
import ChatLink from '../components/ChatLink/ChatLink';
import SearchIcon from "@material-ui/icons/Search"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 48px)",
            [theme.breakpoints.down('sm')]: {
                paddingTop: 0,
            }
        },
        container: {
            position: "relative",
            boxShadow: "0px 0px 5px #ccc",
            [theme.breakpoints.down('sm')]: {
                height: "100%"
            }
        },
        chats: {
            background: "#fff",
            height: "96%",
            paddingTop: 15,
            border: "1px solid #ccc",

            overflowY: "auto",
        },

        currentChat: {

        }
    }),
);

const chats = () => {
    const { store } = useContext(Context)
    const classes = useStyles()

    const searchUsers = ()=>{
        alert("Search")
    }

    return (
        <Grid className={classes.content} container>
            <Grid item sm={4} lg={4} className={classes.chats}>

                <form onSubmit={searchUsers}>
                    <TextField
                        label="Поиск"
                        id="search"
                        variant="standard"
                    />
                </form>


                <ChatLink username={"Tim Berners Lee"} chatLink={"2131231243214"} />
                <ChatLink username={"Gucci Boss"} chatLink={"2131231243214"} />
                <ChatLink username={"Bill Gates"} chatLink={"2131231243214"} />
                <ChatLink username={"Mark Zuckerberg"} chatLink={"2131231243214"} />
                <ChatLink username={"Jeff Bezos"} chatLink={"2131231243214"} />
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
            </Grid>
        </Grid>
    );
}

export default observer(withAuth(chats));
