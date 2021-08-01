import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import withAuth from '../../HOC/withAuth';
import { Context } from '../_app';
import { Friend } from '../../models/Friend';
import { Grid, Typography, Box, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';
import UsersStyles from '../../styles/users.style';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const users = () => {
    const classes = UsersStyles()
    const { store } = useContext(Context)

    const [users, setUsers] = useState<Friend[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [fetching, setFetching] = useState<boolean>(true)
    const [totalCount, setTotalCount] = useState<number>(0)

    useEffect(() => {
        if (fetching) {
            console.log('fetching')
            store.getAllUsers(currentPage, 14)
                .then(response => {
                    setUsers([...users, ...response.users])
                    setCurrentPage(prev => prev + 1)
                    setTotalCount(response.count)
                })
                .finally(() => {
                    setFetching(false)
                })

        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }

    }, [fetching])

    const scrollHandler = (e: any) => {
        if (window) {
            console.log(totalCount)
            if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && users.length < totalCount) {
                setFetching(true)
            }
        }
    }

    if (store.isLoading) {
        return <h1>Loading</h1>
    }

    return (
        <Grid className={classes.content} container>
            <Grid className={classes.users} item sm={9} md={8} lg={7} xl={6}>
                <Box className={classes.topPanel}>
                    <Typography variant="h4" className={classes.pageTitle}>Поиск друзей</Typography>
                </Box>
                <div className={classes.usersList}>
                    {users && users.map((user: Friend) => (
                        // <li style={{ padding: "20px", fontSize: "30px" }} key={user._id}>{user.firstName} {user.lastName}</li>
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
                                    День рождения: 28 января 2005 г.
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Город: Луганск
                                </Typography>
                            </CardContent>

                            <CardActions className={classes.actions}>
                                <Button className={classes.sendMessageBtn} size="small" color="primary">
                                    Отправить сообщение
                                </Button>
                                <Button className={classes.addFriendBtn} size="small" color="primary">
                                    <PersonAddIcon />
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </div>
                {/* {JSON.stringify(store.user)} */}
            </Grid>
        </Grid>
    );
}

export default observer(withAuth(users));
