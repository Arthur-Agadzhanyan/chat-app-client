import React from "react";
import { observer } from "mobx-react-lite";
import { Container, Fade, Grid, Slide, Typography } from "@material-ui/core";
import LoginForm from "../components/LoginForm/LoginForm";
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import notWithAuth from "../HOC/notWithAuth";
import LoginStyles from "../styles/login.style";

function Login() {
  const classes = LoginStyles()
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