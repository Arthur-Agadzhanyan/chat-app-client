import { Button, createStyles, Zoom, Grid, makeStyles, Theme, Typography, Snackbar, IconButton } from '@material-ui/core';
import React, { FC, useState } from 'react';
import Store from '../../store/store';
import VerificationInput from './VerificationInput';
import CloseIcon from '@material-ui/icons/Close';


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
        },
        title: {
            marginBottom: 20,
            fontWeight: 'bold'
        },
        logoutBtn: {
            marginTop: 20,
            padding: "10px 20px"
        },
        alert: {
            margin: "10px 0px"
        }
    }),
);

const VerificationAlert: FC<Props> = ({ store }) => {
    const classes = useStyles()
    const [success, setSuccess] = useState()
    const [error, setError] = useState()
    const [open, setOpen] = useState(true)

    const getVerificationCode = async () => {
        setOpen(true)
        const data = await store.getVerificationCode(setSuccess, setError)
    }

    const handleClose = ()=>{
        setOpen(false)
    }

    return (
        <Grid container alignItems='center' justify="center" className={classes.content} >
            {success
                ? <VerificationInput store={store} />

                : (
                    <>
                        <Zoom in={true} style={{ transitionDelay: '500ms' }}>
                            <Grid item xs={12} sm={7} md={6} lg={5} xl={4} className={classes.container}>
                                <Typography variant="h5" className={classes.title}>Добро пожаловать в Бренд, {store.user.firstName}!</Typography>
                                <div> Подтвердите свой адрес электронной почты для начала. Если ваш аккаунт когда-либо будет заблокирован, это поможет вам восстановить к нему доступ.</div>
                                <Button className={classes.logoutBtn} variant="contained" color="primary" disableElevation onClick={getVerificationCode}>Подтвердите ваш эл. адрес</Button>
                            </Grid>
                        </Zoom>

                        {error && (
                            <Snackbar
                            anchorOrigin={{ vertical: "top", horizontal:"center" }}
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
                )

            }


        </Grid>
    );
}

export default VerificationAlert;
