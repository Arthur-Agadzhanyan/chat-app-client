import { makeStyles, Theme, createStyles } from '@material-ui/core';
const ChatsStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 48px)",
            [theme.breakpoints.down('sm')]: {
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
        chats: {
            // display: "none",
            background: "#fff",
            height: "98%",
            paddingTop: 15,
            border: "1px solid #ccc",
        },
        chatSearch: {
            width: "270px",
            margin: "5px 15px",
            height: "10%",
        },
        chatList: {
            height: "90%",
            overflowY: "auto",
            overflowX: "hidden"
        },
        messages: {
            position: "relative",
            background: "#fff",
            height: "98%",
            border: "1px solid #ccc",
            borderLeft: "none",
            display: "flex",
            flexDirection: "column",
            
            [theme.breakpoints.down('sm')]: {
                borderLeft: "1px solid #ccc",
                width: "100%",
            }
        },
        chatHeader:{
            maxHeight: 63,
            borderBottom: "1px solid #ccc"
        },
        headerAvatar:{
            width: 30,
            height: 30
        },
        messageContainer: {
            minHeight: "40%",
            maxHeight: "80%",
            overflowY: "auto",
            overflowX: "hidden"
        },//790
        messageList: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingTop: 20,

        },
        inputContainer: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "flex-end",
            marginTop: "auto",
            // height: "20vh",
            zIndex: 110
        },
        inputBorder:{
            
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
            borderRadius: "20px",
            padding: "7px 10px",
            background: "#fff",
            width: "90%",
            border: "1px solid #ccc",
            [theme.breakpoints.down('xs')]:{
                width: "98%",
                padding: "7px 10px",
                marginBottom: "5px",
            }
        },
        attachFile: {
            alignItems: "center",

        },
        messageInputContainer: {
            flex: "0 1 80%",
            alignItems: "center",
        },
        messageInput: {
            width: "100%",
            resize: "none",
            padding: "8px 9px",
            fontSize: 15,
            border: "none",
            // fontFamily: 'Big Shoulders Display'
        },
        sendMessage: {
            marginLeft: "auto",
            marginRight: 20,
            textAlign: "center",
            [theme.breakpoints.down('xs')]:{
                marginRight: 3,
                marginLeft: 3
            }
        }
    }),
);

export default ChatsStyles