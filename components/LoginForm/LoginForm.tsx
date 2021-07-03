import { Button, FormControl, makeStyles, TextField, Divider, Typography, Box, createStyles, Theme, Zoom } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Context } from '../../pages/_app';
import Link from "next/link"
import { Alert } from '@material-ui/lab';

interface Form {
    email: string,
    password: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            borderRadius: "10px",
            padding: "30px"
        },
        title: {
            marginBottom: '35px',
            textAlign: "left",
            [theme.breakpoints.down('lg')]:{
                fontSize: 25
            },
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

const LoginForm = () => {
    const classes = useStyles()

    const { store } = useContext(Context)

    const [form, setForm] = useState<Form>({
        email: "", password: ""
    })
    const [errors, setErrors] = useState({
        email: false, password: false
    })
    const [errorMessage, setErrorMessage] = useState("")

    const getIntoTheAccount = (e: React.FormEvent) => {
        e.preventDefault()
        setErrors({ email: false, password: false })
        setErrorMessage("")

        if (!form.email.trim()) {
            setErrorMessage("Поле для ввода почты не должно быть пустым")
            return setErrors({ ...errors, email: true })
        }
        if (!form.password.trim()) {
            setErrorMessage("Поле для ввода пароля не должно быть пустым")
            return setErrors({ ...errors, password: true })
        } 
        
        store.login(form.email, form.password).then(()=>{
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
            <Typography variant="h4" className={classes.title}>Вход в аккаунт</Typography>
            {errors.email || errors.password 
            ? <Zoom in={true}><Alert severity="error" className={classes.alert}>{errorMessage}</Alert></Zoom>
            : ""
            }
            <form onSubmit={getIntoTheAccount}>
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
                    Войти
                </Button>
                <Divider className={classes.formLine} />
                <Box textAlign="center">
                    Нет аккаунта?&nbsp;
                    <Typography variant="inherit" color="primary" className={classes.registerLink}>
                        <Link href="/registration">
                            Зарегистрироваться
                        </Link>
                    </Typography>
                </Box>
            </form>
        </FormControl>
    );
}

export default LoginForm;
