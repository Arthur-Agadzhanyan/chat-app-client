import React, { useContext, useEffect } from 'react';
import withAuth from '../HOC/withAuth';
import { Grid } from "@material-ui/core"
import { Context } from './_app';
import { observer } from 'mobx-react-lite';
import ChatsStyles from '../styles/chats.style';
import ChatList from '../components/Chat/ChatList/ChatList';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const chats = () => {
    const { store } = useContext(Context)
    const classes = ChatsStyles()

    return (
        <Grid className={classes.content} container>
            <ChatList store={store} xs={12} sm={4} lg={2} md={3} mbVisible={true}/>
            <Grid item xs={12} sm={8} lg={5} md={7} className={classes.messages}>
                <MailOutlineIcon className={classes.message_icon}/>
                <div className={classes.text}>
                    Выберите, кому хотели бы написать
                </div>
            </Grid>
        </Grid>
    );
}

export default observer(chats);
