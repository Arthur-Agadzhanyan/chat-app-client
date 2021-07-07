import { Button, FormControl, makeStyles, TextField, Divider, Typography, Box, createStyles, Theme, Zoom } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Context } from '../../pages/_app';
import Link from "next/link"
import { Alert } from '@material-ui/lab';

interface Form {
    email: string,
    password: string,
    firstName: string,
    lastName: string
}

interface FormErrors {
    emailError?: string | null,
    passwordError?: string | null,
    firstNameError?: string | null,
    lastNameError?: string | null
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            borderRadius: "10px",
            padding: "30px",
            [theme.breakpoints.down('lg')]: {
                padding: "30px 0px"
            }
        },
        title: {
            marginBottom: '35px',
            textAlign: "center",
            // [theme.breakpoints.down('lg')]:{
            //     fontSize: 25
            // },
            [theme.breakpoints.down('sm')]: {
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
            [theme.breakpoints.down('lg')]: {
                fontSize: 15
            }
        },
        formLine: {
            margin: '20px 0px'
        },
        alert: {
            marginBottom: 20
        }
    }));

const initialErrors = {
    emailError: null, passwordError: null, firstNameError: null, lastNameError: null
}

const RegistrationForm = () => {
    const classes = useStyles()

    const { store } = useContext(Context)

    const [form, setForm] = useState<Form>({
        email: "", password: "", firstName: "", lastName: ""
    })
    const [errors, setErrors] = useState<FormErrors>(initialErrors)
    const [errorMessage, setErrorMessage] = useState([])

    const getIntoTheAccount = (e: React.FormEvent) => {
        e.preventDefault()
        setErrors(initialErrors)

        if (!form.firstName.trim()) {
            return setErrors({ ...errors, firstNameError: "Поле для ввода имени не должно быть пустым" })
        }
        if (!form.lastName.trim()) {
            return setErrors({ ...errors, lastNameError: "Поле для ввода фамилии не должно быть пустым" })
        }
        if (!form.email.trim()) {
            return setErrors({ ...errors, emailError: "Поле для ввода почты не должно быть пустым" })
        }
        if (!form.password.trim()) {
            return setErrors({ ...errors, passwordError: "Поле для ввода пароля не должно быть пустым" })
        }

        store.signup(form.firstName, form.lastName, form.email, form.password).then(() => {
            if (store.loginErrors) {
                const errorNames = Object.keys(store.loginErrors)
                const errorValues = Object.values(store.loginErrors)
                setErrors(store.loginErrors)
            }
        })
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const errorAlerts = () => {
        if (errors.firstNameError || errors.lastNameError || errors.emailError || errors.passwordError) {
            const messages = Object.values(errors).filter(n => n)
            return messages.map(error => (
                <Zoom in={true}>
                    <Alert severity="error" className={classes.alert}>
                        {error}
                    </Alert>
                </Zoom>
            ))
        }
    }

    return (
        <FormControl className={classes.form}>
            <Typography variant="h4" className={classes.title}>Регистрация</Typography>

            {/* Рефакторить */}
            {errorAlerts()}

            <form onSubmit={getIntoTheAccount}>
                <TextField
                    className={classes.formInput}
                    fullWidth
                    id="firstName"
                    name="firstName"
                    type='text'
                    label="Имя"
                    variant='outlined'
                    value={form.firstName}
                    onChange={changeHandler}
                    error={errors.firstNameError !== null}
                />
                <TextField
                    className={classes.formInput}
                    fullWidth
                    id="lastName"
                    name="lastName"
                    type='text'
                    label="Фамилия"
                    variant='outlined'
                    value={form.lastName}
                    onChange={changeHandler}
                    error={errors.lastNameError !== null}
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
                    error={errors.emailError !== null}
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
                    error={errors.passwordError !== null}
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
