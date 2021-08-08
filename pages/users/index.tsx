import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import withAuth from '../../HOC/withAuth';
import { Context } from '../_app';
import { Friend } from '../../models/Friend';
import { Typography, Box, TextField, Grow, Zoom, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import UsersStyles from '../../styles/users.style';
import UsersContainer from '../../components/UsersContainer/UsersContainer';
import UserCard from '../../components/UserCard/UserCard';
import TuneIcon from '@material-ui/icons/Tune';
import { Autocomplete, createFilterOptions } from '@material-ui/lab';

const users = () => {
    const classes = UsersStyles()
    const { store } = useContext(Context)

    const [users, setUsers] = useState<Friend[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [fetching, setFetching] = useState<boolean>(true)
    const [totalCount, setTotalCount] = useState<number>(0)

    const [advancedSettings, setAdvancedSettings] = useState<boolean>(false)
    const [countries, setCountries] = useState<string[]>([])
    const [advancedForm, setAdvancedForm] = useState({
        location: "", ageFrom: "", ageTo: ""
    })

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

    useEffect(() => {
        getCountries().then((data: any) => {
            setCountries(data)
        })
    }, [])

    const changeCountry = (event: any, newValue: string | null) => {
        if (!newValue) {
            // setForm({ ...form, location: "" })
        }
        // setForm({ ...form, location: newValue as string })
    }

    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: (option: string) => option,

    });


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

    const getCountries = () => {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest()
            request.open("GET", "cities.json")
            request.onload = function () {
                try {
                    if (this.status == 200) {
                        const fetched = JSON.parse(this.response)
                        const response: string[] = []
                        fetched.map((country: any) => {
                            response.push(country.name)
                        })
                        // console.log(response.sort())
                        resolve(response.sort())
                    } else {
                        reject(`${this.status}: ${this.statusText}`)
                    }
                } catch (error: any) {
                    reject(error.message)
                }
            }

            request.onerror = function () {
                reject(`${this.status}: ${this.statusText}`)
            }

            request.send()
        })
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

                                    <Box className={classes.searchLocation}>
                                        <Typography className={classes.blockTitle}>Регион</Typography>
                                        <Autocomplete
                                            id="location"
                                            className={classes.locationInput}
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
                                                    value={advancedForm.location}
                                                />
                                            )}
                                        />
                                    </Box>
                                    <Box className={classes.searchAge}>
                                        <Typography className={classes.blockTitle}>Возраст</Typography>
                                        <Box className={classes.ageInputs}>
                                            {/* <TextField
                                                className={classes.ageInput}
                                                fullWidth
                                                id="age_from"
                                                name="ageFrom"
                                                label="От"
                                                type='text'
                                                variant='outlined'
                                            /> */}
                                            <FormControl className={classes.ageInput}>
                                                <InputLabel className={classes.ageLabel} id="age_from-label">От</InputLabel>
                                                <Select
                                                    id="age_from"
                                                    name="ageFrom"
                                                    label="От"
                                                    labelId="age_from-label"
                                                    
                                                    // value={age}
                                                    // onChange={handleChange}
                                                    variant='outlined'
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <FormControl className={classes.ageInput}>
                                                <InputLabel className={classes.ageLabel} id="age_to-label">До</InputLabel>
                                                <Select
                                                    
                                                    id="age_to"
                                                    name="ageTo"
                                                    label="До"
                                                    // value={age}
                                                    // onChange={handleChange}
                                                    variant='outlined'
                                                    labelId="age_to-label"
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>

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
                <UserCard store={store} key={`${user}_${i}`} user={user} />
            ))}
        </UsersContainer>


    );
}

export default observer(withAuth(users));
