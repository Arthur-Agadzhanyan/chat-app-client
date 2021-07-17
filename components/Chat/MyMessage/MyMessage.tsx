import { createStyles, makeStyles, Paper, Theme } from '@material-ui/core';
import React, { FC } from 'react';
import MyMessageStyles from './my-message.style';

interface Props{
    children: any
}

const MyMessage: FC<Props> = ({children}) => {
    const classes = MyMessageStyles()
    return (
        <Paper elevation={0} className={classes.message}>
            {children}
        </Paper>
    );
}

export default MyMessage;
