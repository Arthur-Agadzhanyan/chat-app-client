import React, { useContext, useEffect } from 'react';
import withAuth from '../HOC/withAuth';
import { Grid } from "@material-ui/core"
import { Context } from './_app';
import { observer } from 'mobx-react-lite';
import ChatsStyles from '../styles/chats.style';
import ChatList from '../components/Chat/ChatList/ChatList';

const chats = () => {
    const { store } = useContext(Context)
    const classes = ChatsStyles()

    return (
        <Grid className={classes.content} container>
            <ChatList store={store} sm={12} lg={2} mbVisible={true}/>
            <Grid item sm={12} lg={5} className={classes.messages}>
                
            </Grid>
        </Grid>
    );
}

export default observer(chats);
