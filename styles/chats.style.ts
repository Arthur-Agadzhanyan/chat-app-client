import { makeStyles, Theme, createStyles } from '@material-ui/core';
const ChatsStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 48px)",
            [theme.breakpoints.down('sm')]: {
                height: "calc(100vh - 48px)",
                paddingTop: 0,
            }
        },
        container: {
            position: "relative",
            boxShadow: "0px 0px 5px #ccc",
            [theme.breakpoints.down('sm')]: {
                height: "100%"
            }
        },
        messages: {
            position: "relative",
            background: "#fff",
            height: "100%",
            borderLeft: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            
            [theme.breakpoints.down('sm')]: {
                display: "none",
                borderLeft: "1px solid #ccc",
                width: "100%",
            }
        },
        message_icon:{
            color: "#ccc",
            fontSize: 100,
            marginBottom: 15,
            border: "2px solid #ccc",
            padding: "17px",
            borderRadius: 80
        },
        text:{
            fontSize: 18,
            background: "#eee",
            padding: "13px 20px",
            borderRadius: 35
        }
    }),
);

export default ChatsStyles