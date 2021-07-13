import { Box, Container, createStyles, Fade, Grid, makeStyles, Slide, Theme, Typography } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import { Context } from "./_app";
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import notWithAuth from "../HOC/notWithAuth";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      minHeight: "100vh",
      overflow: 'hidden'
    },
    brandContainer: {
      width: "100%",
      minHeight: '100vh',
      background: "url('loginImage.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#FFF",
    },
    brand: {
      position: "absolute",
      top: 20,
      left: 20,
      fontSize: 20,
      marginBottom: '30px',

    },
    titleContainer: {
      height: "100%",
      marginLeft: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    brandTitle: {
      padding: "20px 0px",
      [theme.breakpoints.down('md')]: {
        fontSize: 60
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 40
      }
    },
    brandSubtitle: {
      [theme.breakpoints.down('md')]: {
        fontSize: 30
      }
    },
    formContainer: {
      width: "100%",
      minHeight: "100vh",
      background: "#f5f5f5",
      display: "flex",
      alignItems: 'center',
      justifyContent: "center",
      flexDirection: "column",
    },
    phoneArrow: {
      position: "absolute",
      bottom: 20,
      left: '50%',
      margin: "0 auto",
      transform: "translate(-50%,0%)",
      fontSize: 35,
      [theme.breakpoints.up('md')]: {
        display: "none"
      }
    }
  }));

function Login() {
  const classes = useStyles()
  const { store } = useContext(Context)
  return (
    <Fade in={true}>
      <Grid
        className={classes.container}
        container
        direction="row"
      >
        <Slide direction="right" in={true}>
          <Grid item sm={12} md={8} lg={9} className={classes.brandContainer}>
            <Typography className={classes.brand}>Типа крутой бренд</Typography>
            <Container className={classes.titleContainer}>
              <Typography className={classes.brandTitle} variant="h1">В курсе происходящего</Typography>
              <Typography className={classes.brandSubtitle} variant="h3">Присоединяйтесь к Бренду  прямо сейчас!</Typography>
              <ArrowDownwardOutlinedIcon className={classes.phoneArrow} />
            </Container>
          </Grid>
        </Slide>
        <Slide direction="left" in={true}>
          <Grid item sm={12} md={4} lg={3} className={classes.formContainer}>
            <LoginForm />
          </Grid>
        </Slide>


      </Grid>

    </Fade>
  )
}

export default observer(notWithAuth(Login))