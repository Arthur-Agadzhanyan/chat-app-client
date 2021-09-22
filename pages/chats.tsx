import React, { useContext, useEffect } from 'react';
import withAuth from '../HOC/withAuth';
import { Fade, Grid } from "@material-ui/core"
import { Context } from './_app';
import { observer } from 'mobx-react-lite';
import ChatsStyles from '../styles/chats.style';
import ChatList from '../components/Chat/ChatList/ChatList';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const chats = () => {
    const { store:{chats} } = useContext(Context)
    const classes = ChatsStyles()

    return (
        <Fade in={true}>
            <Grid className={classes.content} container>
                <ChatList store={chats} xs={12} sm={12} md={2} mbVisible={true} />
                <Grid item xs={12} sm={12} md={6}  className={classes.messages}>
                    <MailOutlineIcon className={classes.message_icon} />
                    <div className={classes.text}>
                        Выберите, кому хотели бы написать
                    </div>
                </Grid>
            </Grid>
        </Fade>
    );
}

export default observer(withAuth(chats));
