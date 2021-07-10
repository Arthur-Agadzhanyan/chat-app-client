import React, { useContext } from 'react';
import notWithAuth from '../HOC/notWithAuth';
import { createStyles, Grid, makeStyles, Theme, Card, IconButton, InputBase, Paper, Divider, TextField } from "@material-ui/core"
import { Context } from './_app';
import { observer } from 'mobx-react-lite';
import ActivationAlert from '../components/VerificationAlert/VerificationAlert';
import ChatLink from '../components/ChatLink/ChatLink';
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import DirectionsIcon from "@material-ui/icons/Directions"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "20px",

            [theme.breakpoints.down('sm')]: {
                paddingTop: 0,
            }
        },
        container: {
            position: "relative",
            background: "#fff",
            height: "88vh",
            boxShadow: "0px 0px 5px #ccc",
            [theme.breakpoints.down('sm')]: {
                height: "93.5vh"
            }
        },
        chats: {
            height: "88vh",
            borderRight: "1px solid #ccc",
            overflowY: "auto",
            [theme.breakpoints.down('sm')]: {
                height: "93.5vh"
            }
        },

        currentChat: {

        }
    }),
);

const chats = () => {
    const { store } = useContext(Context)
    const classes = useStyles()

    return (
        <Grid className={classes.content} container>
            <Grid className={classes.container} item sm={12} md={8} lg={7} xl={6}>
                {/* {JSON.stringify(store)} */}
                <Grid container>
                    <Grid item sm={4} lg={4} className={classes.chats}>
                        <Card elevation={0}>
                            <TextField
                                label="Size"
                                id="outlined-size-normal"
                                defaultValue="Normal"
                                variant="outlined"
                            />
                            <IconButton type="submit" aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Card>

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
                    </Grid>

                    <Grid item sm={8} lg={8} className={classes.currentChat}>
                        <div>
                            <button onClick={()=>store.logout()}>Выход</button>
                        </div>
                    </Grid>
                </Grid>
                {/* <Button onClick={()=>store.logout()}>Выход</Button> */}
            </Grid>
        </Grid>
    );
}

export default observer(notWithAuth(chats));
