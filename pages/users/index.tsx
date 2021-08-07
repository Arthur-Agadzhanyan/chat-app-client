import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import withAuth from '../../HOC/withAuth';
import { Context } from '../_app';
import { Friend } from '../../models/Friend';
import { Typography, Box, TextField, Grow, Zoom } from '@material-ui/core';
import UsersStyles from '../../styles/users.style';
import UsersContainer from '../../components/UsersContainer/UsersContainer';
import UserCard from '../../components/UserCard/UserCard';
import TuneIcon from '@material-ui/icons/Tune';

const users = () => {
    const classes = UsersStyles()
    const { store } = useContext(Context)

    const [users, setUsers] = useState<Friend[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [fetching, setFetching] = useState<boolean>(true)
    const [totalCount, setTotalCount] = useState<number>(0)
    const [advancedSettings, setAdvancedSettings] = useState<boolean>(false)

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

    const toggleAdvancedSettings = () => {
        setAdvancedSettings(!advancedSettings)
    }

    if (store.isLoading) {
        return <h1>Loading</h1>
    }

    return (
        <UsersContainer
            topPanel={
                <Box className={classes.topPanel}>
                    <Typography variant="h4" className={classes.pageTitle}>Поиск друзей</Typography>
                    <Box className={classes.searchContainer}>
                        <TextField
                            className={classes.search}
                            fullWidth
                            id="search"
                            name="search"
                            label="Поиск"
                            type='text'
                            variant='outlined'
                        />
                        <Typography className={classes.advancedSearch} onClick={toggleAdvancedSettings}>
                            <TuneIcon className={classes.advancedSearchIcon} /> Расширенный поиск
                        </Typography>

                        {advancedSettings && (
                            <Zoom in={advancedSettings}>
                                <Box className={classes.advancedSearchContainer}>
                                    {/* <Autocomplete
                                    id="location"
                                    className={classes.formInput}
                                    options={countries}
                                    getOptionLabel={(country) => country}
                                    onChange={changeCountry}
                                    filterOptions={filterOptions}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            name="location"
                                            label="Город"
                                            variant="outlined"
                                            value={form.location}
                                            error={(errors.locationError && errors.locationError !== null) ? true : false}
                                        />
                                    )}
                                /> */}
                                    <Box className={classes.searchLocation}>
                                        <Typography>Регион</Typography>
                                    </Box>
                                    <Box className={classes.searchAge}>
                                        <Typography className={classes.blockTitle}>Возраст</Typography>
                                        <Box className={classes.ageInputs}>
                                            <TextField
                                                className={classes.ageInput}
                                                fullWidth
                                                id="age_from"
                                                name="ageFrom"
                                                label="От"
                                                type='text'
                                                variant='outlined'
                                            />
                                            <TextField
                                                className={classes.ageInput}
                                                fullWidth
                                                id="age_from"
                                                name="ageFrom"
                                                label="До"
                                                type='text'
                                                variant='outlined'
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </Zoom>

                        )}


                    </Box>
                </Box>
            }>

            {users && users.map((user: Friend, i: number) => (
                // <li style={{ padding: "20px", fontSize: "30px" }} key={user._id}>{user.firstName} {user.lastName}</li>
                <UserCard key={`${user}_${i}`} user={user} />
            ))}
        </UsersContainer>


    );
}

export default observer(withAuth(users));
