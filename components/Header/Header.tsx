import React, { FC } from 'react';
import { AppBar, Toolbar, Typography, Grid, Avatar, Box, Paper, Menu, MenuItem } from '@material-ui/core';
import Link from "next/link"
import { HeaderProps } from './interfaces';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import HeaderStyles from './header.style';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

// import EmailIcon from '@material-ui/icons/Email';
// import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
// import NotificationsIcon from '@material-ui/icons/Notifications';

const Header: FC<HeaderProps> = ({ store }) => {
    const classes = HeaderStyles()

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    const logout = () => {
        setAnchorEl(null);
        store.logout()
    }

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

                            {store.user.verified && (
                                <>
                                    
                                    <Box className={classes.avatar}>
                                        <NotificationsNoneIcon />
                                    </Box>
                                    

                                    <Link href="/chats">
                                        <Box className={classes.avatar}>
                                            <MailOutlineIcon />
                                        </Box>
                                    </Link>

                                    <Link href="/friends">
                                        <Box className={classes.avatar}>
                                            <PeopleOutlineIcon />
                                        </Box>
                                    </Link>
                                    <Box className={classes.avatar} onClick={handleClick}>
                                        <Typography variant="h6" className={classes.avatar__text}>
                                            {store.user.firstName}
                                        </Typography>

                                        <Avatar aria-label="recipe" color="primary" className={classes.avatar__image}>
                                            {store.user.firstName[0].toUpperCase()}
                                        </Avatar>
                                    </Box>
                                </>
                            )}
                        </Toolbar>
                    </Grid>
                </Grid>
            </AppBar>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                elevation={0}
                className={classes.menu}
            >
                <Paper className={classes.poppup}>
                    {/* <Typography className={classes.poppup__title}>{store.user.firstName} {store.user.lastName}</Typography> */}
                    <Link href="/profile">
                        <MenuItem onClick={handleClose} className={classes.poppup__link}>Профиль</MenuItem>
                    </Link>
                    <Link href="/settings">
                        <MenuItem onClick={handleClose} className={classes.poppup__link}>Настройки</MenuItem>
                    </Link>
                    <MenuItem onClick={logout} className={`${classes.poppup__link} ${classes.exit}`}>Выйти</MenuItem>
                </Paper>
            </Menu>
        </>
    );
}

export default Header;
