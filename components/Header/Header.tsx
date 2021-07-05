import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography, createStyles, Theme, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minHeight: "5vh",
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

const Header = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar position="static" className={classes.root}>
                <Container>
                    <Toolbar>
                        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton> */}
                        <Typography variant="h6" className={classes.title}>
                            Типа крутой бренд
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

export default Header;
