import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import { Context } from "./_app";

const useStyles = makeStyles({
  container: {
    height: "90vh",
    background: "#f0f2f5"
  },
  brandContainer:{
    height: '100%',
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  brand:{
    maxWidth: "50%",
    marginBottom: '30px'
  },
  pageTitle:{
    marginBottom: '10px'
  },
  formContainer:{
    paddingLeft: "50px"
  }
});

function Home() {
  const classes = useStyles()
  const { store } = useContext(Context)

  const logout = (e: React.MouseEvent<HTMLButtonElement>) => {
    store.logout()
  }

  if (store.isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }
  return (
    <>
      <Grid
        className={classes.container}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={6} className={classes.brandContainer}>
          <Box className={classes.brand}>
            <Typography variant="h2" className={classes.pageTitle}>Тут название</Typography>
            <Typography variant="h5">А тут какой-нибудь мега супер пупер пафосный текст.</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}  className={classes.formContainer}>
          <LoginForm />
        </Grid>

      </Grid>

    </>
  )
}

export default observer(Home)