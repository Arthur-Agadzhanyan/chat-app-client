import { createStyles, makeStyles, Paper, Theme } from '@material-ui/core';
import React, { FC } from 'react';
import MessageStyles from './message.style';

interface Props{
    children: any
}

const Message: FC<Props> = ({children}) => {
    const classes = MessageStyles()
    return (
        <Paper elevation={0} className={classes.message}>
            {children}
        </Paper>
    );
}

export default Message;
