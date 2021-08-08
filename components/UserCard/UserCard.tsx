import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { UserCardProps } from './interfaces';
import UserCardStyles from './user-card.style';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import moment from 'moment'

const UserCard: FC<UserCardProps> = ({user, store, friend = false}) => {
    const classes = UserCardStyles()

    const sendFriendRequest = async (id: string)=>{
        await store.sendFriendRequest(id)
    }

    return (
        <Card className={classes.userCard} elevation={0}>
            <CardMedia
                className={classes.media}
                image={user.avatar ? user.avatar : "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg"}
                title="Contemplative Reptile"
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
                <Button className={classes.sendMessageBtn} size="medium" color="primary">
                    Отправить сообщение
                </Button>
                {!friend && (
                    <Button className={classes.addFriendBtn} size="medium" color="primary" onClick={()=>sendFriendRequest(user._id)}>
                        <PersonAddIcon />
                    </Button>
                )}
                
            </CardActions>
        </Card>
    );
}

export default UserCard;
