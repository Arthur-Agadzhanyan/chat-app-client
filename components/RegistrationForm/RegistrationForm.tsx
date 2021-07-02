import { Button, FormControl, makeStyles, TextField, Divider, Typography, Box, createStyles, Theme, Zoom } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Context } from '../../pages/_app';
import Link from "next/link"
import { Alert } from '@material-ui/lab';

interface Form {
    email: string,
    password: string
    username: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            borderRadius: "10px",
            padding: "30px",
            [theme.breakpoints.down('lg')]:{
                padding: "30px 0px"
            }
        },
        title: {
            marginBottom: '35px',
            textAlign: "center",
            // [theme.breakpoints.down('lg')]:{
            //     fontSize: 25
            // },
            [theme.breakpoints.down('sm')]:{
                fontSize: 35,
                paddingBottom: 20
            }
        },
        formInput: {
            margin: '0px 0px 20px 0px',
            background: "#fff"
        },
        formButton: {
            fontSize: 17,
            fontWeight: "bold",
            padding: 13
        },
        registerLink: {
            fontSize: 17,
            borderBottom: "1px solid #7f6e9b",
            [theme.breakpoints.down('lg')]:{
                fontSize: 15 
            }
        },
        formLine: {
            margin: '20px 0px'
        },
        alert:{
            marginBottom: 20
        }
    }));

const RegistrationForm = () => {
    const classes = useStyles()

    const { store } = useContext(Context)

    const [form, setForm] = useState<Form>({
        email: "", password: "",username: ""
    })
    const [errors, setErrors] = useState({
        email: false, password: false, username:false
    })
    const [errorMessage, setErrorMessage] = useState("")

    const getIntoTheAccount = (e: React.FormEvent) => {
        e.preventDefault()
        setErrors({ email: false, password: false, username: false })

        if (!form.email.trim()) {
            return setErrors({ ...errors, email: true })
        }
        if (!form.password.trim()) {
            return setErrors({ ...errors, password: true })
        }
        if(!form.username.trim()){
            return setErrors({ ...errors, username: true })
        }

        store.registration(form.username, form.email, form.password).then(()=>{
            if(store.loginErrors){
                const errorNames = Object.keys(store.loginErrors)
                const errorValues = Object.values(store.loginErrors)
                setErrors(prev=>{
                    return {...prev, [errorNames[0]]: true}
                })
                setErrorMessage(errorValues[0])
            }
        })
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <FormControl className={classes.form}>
            <Typography variant="h4" className={classes.title}>Регистрация</Typography>
            {errors.email 
            ? <Zoom in={true}><Alert severity="error" className={classes.alert}>{errorMessage}</Alert></Zoom>
            : ""
            }
            <form onSubmit={getIntoTheAccount}>
                <TextField
                    className={classes.formInput}
                    fullWidth
                    id="username"
                    name="username"
                    type='text'
                    label="Имя пользователя"
                    variant='outlined'
                    value={form.username}
                    onChange={changeHandler}
                    error={errors.username}
                />
                <TextField
                    className={classes.formInput}
                    fullWidth
                    id="email"
                    name="email"
                    type='email'
                    label="Адрес электронной почты"
                    variant='outlined'
                    value={form.email}
                    onChange={changeHandler}
                    error={errors.email}
                />
                <TextField
                    className={classes.formInput}
                    fullWidth
                    id="password"
                    name="password"
                    label="Пароль"
                    type='password'
                    variant='outlined'
                    value={form.password}
                    onChange={changeHandler}
                    error={errors.password}
                />
                <Button className={classes.formButton} color="primary" variant="contained" fullWidth type="submit" disableElevation>
                    Зарегистрироваться
                </Button>
                <Divider className={classes.formLine} />
                <Box textAlign="center">
                    Уже зарегистрированы?&nbsp;
                    <Typography variant="inherit" color="primary" className={classes.registerLink}>
                        <Link href="/">
                            Войти
                        </Link>
                    </Typography>
                </Box>
            </form>
        </FormControl>
    );
}

export default RegistrationForm;
