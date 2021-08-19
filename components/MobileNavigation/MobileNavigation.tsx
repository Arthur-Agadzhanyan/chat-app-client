import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MobileNavStyles from './mobile.nav.style';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

import Link from "next/link"
import { useRouter } from 'next/router';

const MobileNavigation = () => {

    const classes = MobileNavStyles();
    const [value, setValue] = React.useState(0);
    const Router = useRouter()
    
    const onLink = (link: string)=>{
        Router.push(link)
    }

    useEffect(()=>{
        if(Router.pathname === "/friends"){
            setValue(0)
        }
        if(Router.pathname === "/chats"){
            setValue(1)
        }
        if(Router.pathname === "/profile"){
            setValue(2)
        }
    },[Router])

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                console.log(event)
                setValue(newValue)
            }}
            showLabels
            className={classes.root}
        >
            
            <BottomNavigationAction
                label="Друзья" 
                icon={<PeopleOutlineIcon />} 
                onClick={() => onLink("/users")}
            />
            <BottomNavigationAction  
                label="Сообщения" 
                icon={<MailOutlineIcon />} 
                onClick={() => onLink("/chats")} 
            />
            
            <BottomNavigationAction  
                label="Профиль" 
                icon={<AccountCircleOutlinedIcon />} 
                onClick={() => onLink("/profile")}  
            />

        </BottomNavigation>
    );
}

export default MobileNavigation;
