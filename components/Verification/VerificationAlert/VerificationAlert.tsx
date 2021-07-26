import { Button, Zoom, Grid, Typography, Snackbar, IconButton } from '@material-ui/core';
import React, { FC, useState } from 'react';
import VerificationInput from '../VerificationInput/VerificationInput';
import CloseIcon from '@material-ui/icons/Close';
import VerificationAlertStyles from './verification-alert.style';
import { VerificationAlertProps } from './types';

const VerificationAlert: FC<VerificationAlertProps> = ({ store }) => {
    const classes = VerificationAlertStyles()
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
                                <Button id="get_code_btn" className={classes.getCodeBtn} variant="contained" color="primary" disableElevation onClick={getVerificationCode}>Подтвердите ваш эл. адрес</Button>
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
