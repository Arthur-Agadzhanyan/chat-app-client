import { Button, FormControl, TextField, Divider, Typography, Box, Zoom } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Context } from '../../pages/_app';
import Link from "next/link"
import { Alert } from '@material-ui/lab';
import DatePicker from '../DatePicker/DatePicker';
import { Form,FormErrors } from './interfaces';
import SignUpFormStyles from './signup-form.style';

const initialErrors = {
    birthdayError: null, emailError: null, passwordError: null, firstNameError: null, lastNameError: null , locationError: null
}

const SignUp = () => {
    const classes = SignUpFormStyles()

    const { store } = useContext(Context)

    const [form, setForm] = useState<Form>({
        email: "", password: "", firstName: "", lastName: "", location: ""
    })
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2021-07-14'),
    );

    const [errors, setErrors] = useState<FormErrors>(initialErrors)

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
        if(!selectedDate){
            return setErrors({ ...errors, birthdayError: "Поле для ввода даты рождения не должно быть пустым" })
        }
        if (!form.location.trim()) {
            return setErrors({ ...errors, locationError: "Поле для ввода города не должно быть пустым" })
        }

        store.signup(form.firstName, form.lastName, form.email, form.password, form.location,selectedDate).then(() => {
            if (store.loginErrors) {
                setErrors(store.loginErrors)
            }
        })
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const errorAlerts = () => {
        if (errors.firstNameError || errors.lastNameError || errors.emailError || errors.passwordError || errors.birthdayError || errors.locationError) {
            const messages = Object.values(errors).filter(n => n)
            return messages.map((error, i) => (
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
                    error={(errors.firstNameError && errors.firstNameError !== null) ? true : false}
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
                    error={(errors.lastNameError && errors.lastNameError !== null) ? true : false}
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
                <TextField
                    className={classes.formInput}
                    fullWidth
                    id="location"
                    name="location"
                    type='text'
                    label="Город"
                    variant='outlined'
                    value={form.location}
                    onChange={changeHandler}
                    error={(errors.locationError && errors.locationError !== null) ? true : false}
                />
                <DatePicker 
                    id="age" 
                    label="Дата рождения" 
                    selectedDate={selectedDate} 
                    setSelectedDate={setSelectedDate} 
                    error = {errors.birthdayError ? true : false}
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

export default SignUp;
