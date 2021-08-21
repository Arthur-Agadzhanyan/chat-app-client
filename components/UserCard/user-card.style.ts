import { makeStyles, Theme, createStyles } from '@material-ui/core';

const UserCardStyles = makeStyles((theme: Theme) =>
    createStyles({
        userCard: {
            flex: "0 1 31%",
            margin: 5,
            border: `1px solid #ccc`,
            [theme.breakpoints.down('md')]:{
                flex: "0 1 47%",
            },
            [theme.breakpoints.down('xs')]:{
                flex: "0 1 90%",
                margin: "5px 0px",
            },
            "&:hover":{
                boxShadow: "0px 0px 20px #ccc",
            }
        },
        media: {
            minHeight: 300,
        },
        actions:{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            
        },
        sendMessageBtn:{
            [theme.breakpoints.down('xs')]:{
                padding: "3px 0px"
            }
        },
        addFriendBtn:{
            [theme.breakpoints.down('xs')]:{
                padding: "0px"
            }
        }
    }));

export default UserCardStyles