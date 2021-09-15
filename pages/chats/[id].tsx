import React, { useContext } from 'react';
import withAuth from '../../HOC/withAuth';
import { Grid } from "@material-ui/core"
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

            <ChatList store={store} xs={3} sm={3} md={2} mbVisible={false} />
            <MessageList store={store} xs={12} sm={12} md={6}/>

        </Grid>
    );
}

export default observer(withAuth(chat));
