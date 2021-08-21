import { makeStyles, Theme, createStyles } from '@material-ui/core';

const UsersContainerStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        users: {
            background: "#fff",
            minHeight: "90vh",

            [theme.breakpoints.up('md')]:{
                marginTop: 10,            
                borderRadius: 5,
                boxShadow: "0px 0px 10px #ccc",
            }
        },
        topPanel: {
            borderBottom: "1px solid #ccc"
        },
        usersList:{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 10
        }
    }));

export default UsersContainerStyles

