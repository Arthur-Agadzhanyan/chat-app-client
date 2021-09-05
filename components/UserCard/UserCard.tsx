import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { FC, useState } from 'react';
import { UserCardProps } from './interfaces';
import UserCardStyles from './user-card.style';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import moment from 'moment'
import Link from "next/link"
import SendMessageModal from '../Modals/SendMessageModal';

const UserCard: FC<UserCardProps> = ({ user, store, friend = false }) => {
    const [open, setOpen] = useState(false);

    const classes = UserCardStyles()

    const sendFriendRequest = async (id: string) => {
        await store.sendFriendRequest(id)
    }

    const openModal = ()=>{
        setOpen(true) 
    }

    const closeModal = ()=>{
        setOpen(false) 
    }

    return (
        <>
            <Card className={classes.userCard} elevation={0}>
                <CardMedia
                    className={classes.media}
                    image={user.avatar ? user.avatar : "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg"}
                    title={`Аватар полььзователя : ${user.firstName} ${user.lastName}`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {user.firstName} {user.lastName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        День рождения: {moment(user.birthday).format('LL')}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Город: {user.location}
                    </Typography>
                </CardContent>

                <CardActions className={classes.actions}>
                    <Button className={classes.sendMessageBtn} size="medium" color="primary" onClick={openModal}>
                        Отправить сообщение
                    </Button>
                    {!friend && (
                        <Button className={classes.addFriendBtn} size="medium" color="primary" onClick={() => sendFriendRequest(user._id)}>
                            <PersonAddIcon />
                        </Button>
                    )}

                </CardActions>
            </Card>

            <SendMessageModal open={open} user={user} handleClose={closeModal}/>
        </>
    );
}

export default UserCard;
