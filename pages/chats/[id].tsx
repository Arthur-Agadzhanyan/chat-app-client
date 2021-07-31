import React, { useContext, useEffect } from 'react';
import withAuth from '../../HOC/withAuth';
import { Grid, TextareaAutosize, Avatar, CardHeader, Card, Fade } from "@material-ui/core"
import { Context } from './../_app';
import { observer } from 'mobx-react-lite';

import ChatsStyles from '../../styles/chats.style';
import ChatList from '../../components/Chat/ChatList/ChatList';
import MessageList from '../../components/Chat/MessageList/MessageList';

const chat = () => {
    const { store } = useContext(Context)
    const classes = ChatsStyles()

    return (
        <Grid className={classes.content} container>

            <ChatList store={store} xs={12} sm={4} lg={2} md={3} mbVisible={false} />
            <MessageList store={store} xs={12} sm={8} lg={5} md={7} />

        </Grid>
    );
}

export default observer(withAuth(chat));
