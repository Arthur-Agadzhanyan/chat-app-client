import { makeStyles, Theme, createStyles } from '@material-ui/core';

const UsersStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        users: {
            background: "#fff",
            minHeight: "90vh",
            boxShadow: "0px 0px 10px #ccc",
            marginTop: "10px"
        },
        pageTitle: {
            padding: "20px 0px ",
            textAlign: "center",
            background: "#fff",
        },
        topPanel: {
            borderBottom: "1px solid #ccc"
        },
        usersList:{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 10
        },
        userCard: {
            flex: "0 1 31%",
            margin: 5,
            border: "1px solid #ccc",
            [theme.breakpoints.down('xs')]:{
                flex: "0 1 47%",
            },
            "&:hover":{
                boxShadow: "0px 0px 20px #ccc",
            }
        },
        media: {
            minHeight: 220,
        },
        actions:{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            
        },
        sendMessageBtn:{
            flex: "0 1 80%"
        },
        addFriendBtn:{
            // flex: "0 1 20%",
            padding: "0px"
        }
    }));

export default UsersStyles