import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import withAuth from '../../HOC/withAuth';
import { Context } from '../_app';
import { Friend } from '../../models/Friend';
import { Grid, Typography, Box, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';
import UsersStyles from '../../styles/users.style';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import UsersContainer from '../../components/UsersContainer/UsersContainer';
import UserCard from '../../components/UserCard/UserCard';

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
        <UsersContainer
            topPanel={
                <Box className={classes.topPanel}>
                    <Typography variant="h4" className={classes.pageTitle}>Поиск друзей</Typography>
                </Box>
            }
        >
            {users && users.map((user: Friend,i:number) => (
                // <li style={{ padding: "20px", fontSize: "30px" }} key={user._id}>{user.firstName} {user.lastName}</li>
                <UserCard key={`${user}_${i}`} user={user}/>
            ))}
        </UsersContainer>


    );
}

export default observer(withAuth(users));
