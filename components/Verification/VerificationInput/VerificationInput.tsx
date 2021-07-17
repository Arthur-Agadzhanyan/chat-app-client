import { Button, Zoom, Grid, Typography, TextField, Snackbar, IconButton } from '@material-ui/core';
import React, { FC, FormEvent, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { observer } from 'mobx-react-lite';
import { VerificationInputProps } from './types';
import VerificationInputStyles from './verification-input.style';

const VerificationInput: FC<VerificationInputProps> = ({ store }) => {
    const classes = VerificationInputStyles()
    const [form, setForm] = useState({
        code: ""
    })
    const [success, setSuccess] = useState()
    const [error, setErrors] = useState()
    const [open, setOpen] = useState(true)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const sendVerificationCode = async (e: FormEvent) => {
        e.preventDefault()
        setOpen(true)
        const response = await store.sendVerificationCode(setSuccess, setErrors, form.code)
    }

    const handleClose = ()=>{
        setOpen(false)
    }

    return (
        <>
            <Zoom in={true} style={{ transitionDelay: '500ms' }}>
                <Grid item xs={12} sm={7} md={6} lg={4} xl={3} className={classes.container}>
                    <Typography variant="h5" className={classes.title}>Подтверждение эл. почты</Typography>
                    <div>Код подтверждения был отправлен на вашу электронную почту {store.user.email}. Пожалуйста, введите код, чтобы продолжить</div>
                    <form onSubmit={sendVerificationCode} className={classes.form}>
                        <TextField
                            fullWidth
                            id="code"
                            name="code"
                            type='text'
                            label="Код"
                            variant='outlined'
                            value={form.code}
                            onChange={changeHandler}
                            error={error ? true : false}
                        />
                        <Button className={classes.logoutBtn} variant="contained" color="primary" type="submit" disableElevation>Отправить код </Button>

                    </form>
                </Grid>
            </Zoom>
            {error && (
                <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    open={open}
                    message={error}
                    action={

                        <IconButton
                            aria-label="close"
                            color="inherit"
                            // className={classes.close}
                            onClick={handleClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    }
                />
            )}
        </>
    );
}

export default observer(VerificationInput);
