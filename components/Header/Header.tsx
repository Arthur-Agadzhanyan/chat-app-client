import React, { FC } from 'react';
import { AppBar, Toolbar, Typography, Grid, Avatar, Box, Paper, Menu, MenuItem } from '@material-ui/core';
import Link from "next/link"
import { HeaderProps } from './interfaces';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HeaderStyles from './header.style';


const Header: FC<HeaderProps> = ({ store }) => {
    const classes = HeaderStyles()

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                elevation={0}
                className={classes.menu}
            >
                <Paper className={classes.poppup}>
                    <Typography className={classes.poppup__title}>Артур Агаджанян</Typography>
                    <Link href="/settings">
                        <MenuItem onClick={handleClose} className={classes.poppup__link}>Настройки</MenuItem>
                    </Link>
                    <MenuItem onClick={handleClose} className={classes.poppup__link}>Выйти</MenuItem>
                </Paper>
            </Menu>

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

                            <Box className={classes.avatar} onClick={handleClick}>
                                <Typography variant="h6" className={classes.avatar__text}>
                                    Артур
                                </Typography>
                                <Avatar aria-label="recipe" color="primary" className={classes.avatar__image}>
                                    {"Артур"[0].toUpperCase()}
                                </Avatar>
                                <ExpandMoreIcon className={classes.avatar__icon} />
                            </Box>
                        </Toolbar>
                    </Grid>
                </Grid>
            </AppBar>
        </>
    );
}

export default Header;
