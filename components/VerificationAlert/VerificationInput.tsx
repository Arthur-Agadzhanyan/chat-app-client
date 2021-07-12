import { Button, createStyles, Zoom, Grid, makeStyles, Theme, Typography, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { FC, FormEvent, useState } from 'react';
import $api, { API_URL } from '../../http';
import { VerifyResponse } from '../../models/response/VerifyResponse';
import Store from '../../store/store';

type Props = {
    store: Store
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            minHeight: "90vh",
            flexGrow: 2,
            background: "#f5f5f5"
        },
        container: {
            background: "#fff",
            borderRadius: 20,
            boxShadow: "0px 0px 16px #ccc",
            padding: "70px 30px 35px 30px ",
            textAlign: "center",
            [theme.breakpoints.down('xs')]: {
                borderRadius: 0,
                boxShadow: "0px 0px 5px #ccc",
                padding: "70px 5px 35px 5px ",
            },
        },
        title: {
            marginBottom: 20,
            fontWeight: 'bold'
        },
        logoutBtn: {
            marginTop: 20,
            padding: "10px 20px"
        },
        form:{
            padding: "20px 30px 10px 30px"
        }
    }),
);

const VerificationInput: FC<Props> = ({ store }) => {
    const classes = useStyles()
    const [form, setForm] = useState({
        code: ""
    })
    const [errors, setErrors] = useState({
        code: ""
    })

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const sendVerificationCode = async (e: FormEvent)=>{
        e.preventDefault()
        if(!form.code.trim()){
           return alert("bbb") 
        }
        const response = await $api.patch(`${API_URL}/verify`,{hash: form.code})
            console.log(response)
    }

    return (
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
                    error={errors.code ? true : false}
                />
                <Button className={classes.logoutBtn} variant="contained" color="primary" type="submit" disableElevation>Отправить код </Button>

                </form>
            </Grid>
        </Zoom>

    );
}

export default VerificationInput;
