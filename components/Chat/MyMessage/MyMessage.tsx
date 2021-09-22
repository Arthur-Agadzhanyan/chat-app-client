import { createStyles, makeStyles, Paper, Theme } from '@material-ui/core';
import moment from 'moment';
import React, { FC } from 'react';
import MessageStyles from './my-message.style';

interface Props{
    msg: {
        author: {
            firstName: string,
            lastName: string,
            _id: string
        },
        createdAt: number,
        text: string,
        visible: string,
        _id: string
    }
}

const Message: FC<Props> = ({msg}) => {
    const classes = MessageStyles()

    // const day = moment(msg.createdAt).format('Y M D').split(" ").reduce((r,num)=>{
    //     return r + +num
    // },0)

    // const today = moment().format('Y M D').split(" ").reduce((r,num)=>{
    //     return r + +num
    // },0)

    return (
        <>
            <Paper elevation={0} className={classes.message}>
                {/* <div className={classes.author}>{msg.author.firstName}</div> */}
                <div className={classes.text}>{msg.text}</div>
                <div className={classes.time}>{moment(msg.createdAt).format("HH:mm ll")}</div>
            </Paper>
            {/* { moment(msg.createdAt).startOf('day').date() +  */}
        </>
        
    );
}

export default Message;
