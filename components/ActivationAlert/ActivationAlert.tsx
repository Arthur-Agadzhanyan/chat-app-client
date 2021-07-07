import { Button, createStyles, Zoom, Grid, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import React, { FC } from 'react';
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
        },
        title:{
            marginBottom: 20,
            fontWeight: 'bold'
        },
        logoutBtn:{
            marginTop: 20,
            padding: "10px 20px"
        }
    }),
);

const ActivationAlert: FC<Props> = ({ store }) => {
    const classes = useStyles()

    const logout = ()=>{
        store.logout()
    }

    return (
        <Grid container alignItems='center' justify="center" className={classes.content} >
            <Zoom in={true} style={{ transitionDelay:  '500ms' }}>
                <Grid item xs={12} sm={7} md={6} lg={5} xl={4}  className={classes.container}>
                    <Typography variant="h5" className={classes.title}>Добро пожаловать в Бренд, {store.user.username}!</Typography>
                    <div> Подтвердите свой адрес электронной почты для начала. Если ваш аккаунт когда-либо будет заблокирован, это поможет вам восстановить к нему доступ. Ссылка на подтверждение адреса электронной почты была выслана на ваш почтовый адрес.</div>
                    <Button className={classes.logoutBtn} onClick={logout}>Выход</Button>
                </Grid>
            </Zoom>
        </Grid>
    );
}

export default ActivationAlert;
