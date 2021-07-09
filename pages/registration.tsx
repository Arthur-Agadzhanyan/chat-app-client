import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "./_app";
import withAuth from "../HOC/withAuth";
import { Box, Container, createStyles, Fade, Grid, makeStyles, Theme, Typography, Zoom } from "@material-ui/core";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            minHeight: "100vh",
            width: "100%",
            background: "url('https://cs4.pikabu.ru/post_img/big/2015/08/28/7/1440760649_1343337366.jpg')",
            //https://cs9.pikabu.ru/post_img/big/2017/01/06/1/1483656571151830361.png
            backgroundSize: "cover",
            backgroundPosition: "center",
        },
        formContainer: {
            // width: "100%",
            background: "#f5f5f5",
            boxShadow: "0px 0px 16px #f5f5f5",
            display: "flex",
            alignItems: 'center',
            justifyContent: "center",
            flexDirection: "column",
            padding: "50px 20px",
            borderRadius: "20px",
            [theme.breakpoints.down('xs')]:{
                minHeight: "100vh",
                borderRadius: "0px",
                padding: "30px 3px",
            }
        }
    }));

function Home() {
    const classes = useStyles()
    const { store } = useContext(Context)
    return (
        <Fade in={true}>
            <Grid
                className={classes.container}
                container
                direction="row"
                alignItems="center"
                justify='center'
            >
                <Zoom in={true} style={{ transitionDelay:  '500ms' }}>
                    <Grid item sm={7} md={5} lg={4} xl={3} className={classes.formContainer}>
                        <Container>
                            <RegistrationForm />
                        </Container>
                    </Grid>
                </Zoom>
            </Grid>

        </Fade>
    )
}

export default observer(withAuth(Home))