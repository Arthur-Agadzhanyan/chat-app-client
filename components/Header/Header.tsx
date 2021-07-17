import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import HeaderStyles from './header.style';

const Header = () => {
    const classes = HeaderStyles()
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
