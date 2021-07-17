import { Button, FormControl, makeStyles, TextField, Divider, Typography, Box, createStyles, Theme, Zoom } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Context } from '../../pages/_app';
import Link from "next/link"
import { Alert } from '@material-ui/lab';
import { Form, FormErrors } from './interfaces';
import LoginFormStyles from './login-form.style';

const initialErrors = {
    emailError: null, passwordError: null
}

const LoginForm = () => {
    const classes = LoginFormStyles()

    const { store } = useContext(Context)

    const [form, setForm] = useState<Form>({
        email: "", password: ""
    })
    const [errors, setErrors] = useState<FormErrors>(initialErrors)

    const getIntoTheAccount = (e: React.FormEvent) => {
        e.preventDefault()
        setErrors(initialErrors)

        if (!form.email.trim()) {
            return setErrors({ ...errors, emailError: "Поле для ввода почты не должно быть пустым" })
        }
        if (!form.password.trim()) {
            return setErrors({ ...errors, passwordError: "Поле для ввода пароля не должно быть пустым" })
        }

        store.login(form.email, form.password).then(() => {
            if (store.loginErrors) {
                setErrors(store.loginErrors)
            }
        })
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const errorAlerts = () => {
        if (errors.emailError || errors.passwordError || errors.authError) {
            const messages = Object.values(errors).filter(n => n)
            return messages.map((error,i) => (
                <Zoom in={true} key={`${error}_${i}`}>
                    <Alert severity="error" className={classes.alert}>
                        {error}
                    </Alert>
                </Zoom>
            ))
        }
    }

    return (
        <FormControl className={classes.form}>
            <Typography variant="h4" className={classes.title}>Вход в аккаунт</Typography>

            {errorAlerts()}

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
                    error={(errors.emailError && errors.emailError !== null) ? true : false}
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
                    error={(errors.passwordError && errors.passwordError !== null) ? true : false}
                />
                <Button className={classes.formButton} color="primary" variant="contained" fullWidth type="submit" disableElevation>
                    Войти
                </Button>

                <Divider className={classes.formLine} />

                <Box textAlign="center">
                    Нет аккаунта?&nbsp;
                    <Typography variant="inherit" color="primary" className={classes.registerLink}>
                        <Link href="/signup">
                            Зарегистрироваться
                        </Link>
                    </Typography>
                </Box>
                
            </form>
        </FormControl>
    );
}

export default LoginForm;
