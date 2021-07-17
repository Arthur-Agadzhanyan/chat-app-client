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
            background: "#fff",
            height: "96%",
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
            background: "#fff",
            height: "96%",
            paddingTop: 15,
            border: "1px solid #ccc",
            borderLeft: "none",
            
        },
        messageContainer: {
            height: "80%",
            overflowY: "auto",
            overflowX: "hidden"
        },
        messageList: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
        },
        inputContainer: {
            width: "90%",
            maxHeight: "20%",
            margin: "auto",
            marginTop: "auto",
            padding: "7px 10px",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc"
        },
        attachFile: {
            flex: "0 1 10%",
            alignItems: "center",

        },
        messageInputContainer: {
            flex: "0 1 70%",
            alignItems: "center",
        },
        messageInput: {
            width: "100%",
            resize: "none",
            padding: "8px 9px",
            fontSize: 17,
            border: "none"
        },
        sendMessage: {
            flex: "0 1 20%",
            alignItems: "center",

        }
    }),
);

export default ChatsStyles