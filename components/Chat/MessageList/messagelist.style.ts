import { makeStyles, Theme, createStyles } from '@material-ui/core';

const MessageListStyles = makeStyles((theme: Theme) =>
    createStyles({
        messages: {
            position: "relative",
            height: "100%",

            display: "flex",
            flexDirection: "column",

            background: "#fff",
            borderLeft: "none",

            [theme.breakpoints.down('sm')]: {
                width: "100%",
            }
        },

        chatHeader: {
            maxHeight: 63,
            borderBottom: "1px solid #ccc"
        },

        headerAvatar: {
            width: 30,
            height: 30
        },

        messageContainer: {
            minHeight: "40%",
            overflowY: "auto",
            overflowX: "hidden"
        },

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
            zIndex: 110
        },

        inputBorder: {
            width: "98%",

            display: "flex",
            alignItems: "center",

            marginBottom: "10px",
            background: "#fff",

            border: "1px solid #ccc",
            borderRadius: "20px",

            overflow: "hidden",

            [theme.breakpoints.down('xs')]: {
                width: "98%",
                marginBottom: "5px",
            }
        },

        attachFile: {
            marginLeft: "5px",
            fontSize: 10
        },

        messageInputContainer: {
            maxWidth: "85%",
            flex: "0 1 90%",
            alignItems: "center",
            padding: "10px 0px 10px 10px"
        },

        messageInput: {
            fontFamily: 'Montserrat, sans-serif',

            width: "100%",
            resize: "none",

            fontSize: 15,
            border: "none",
            
            [theme.breakpoints.down('xs')]: {
                fontSize: 13,
            }
        },

        sendMessage: {
            height: "100%",

            textAlign: "center",
            cursor: "pointer",

            marginLeft: "auto",
            padding: "15px 15px 15px 15px",

            textTransform: "initial"
        }
    }),
);

export default MessageListStyles