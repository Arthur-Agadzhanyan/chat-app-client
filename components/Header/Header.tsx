import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography, createStyles, Theme, Container, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar:{
           
        },
        content: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            margin: 0,
            padding: 0
        },
        toolbar: {
            minHeight: 48
        }
    }),
);

const Header = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar className={classes.appBar} position="static" elevation={0} color="primary">
                <Grid className={classes.content} container>
                    <Grid item sm={9} md={8} lg={7} xl={6}>
                        <Toolbar className={classes.toolbar} disableGutters>
                            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton> */}
                            <Typography variant="h6" className={classes.title}>
                                Типа крутой бренд
                            </Typography>
                        </Toolbar>
                    </Grid>
                </Grid>
            </AppBar>
        </>
    );
}

export default Header;
