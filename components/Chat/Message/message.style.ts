import { makeStyles, Theme, createStyles } from '@material-ui/core';

const MessageStyles = makeStyles((theme: Theme) =>
createStyles({
    message:{
        margin: "10px",
        
        maxWidth: "80%",
        wordBreak: "break-all",
        marginRight: "auto",
    },
    author:{
        color: theme.palette.primary.main,
        fontWeight: "bold"
    },
    text:{
        background: "#eee",
        color: "#202020",
        padding: "10px 15px 10px 15px",
        margin: "5px 0px ",
        borderRadius: 5

    },
    time:{
        textAlign: "right",
        fontSize: 12,
        paddingTop: 3,
        marginLeft: 3
    }
}),
);

export default MessageStyles