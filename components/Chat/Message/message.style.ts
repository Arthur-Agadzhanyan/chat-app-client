import { makeStyles, Theme, createStyles } from '@material-ui/core';

const MessageStyles = makeStyles((theme: Theme) =>
createStyles({
    message:{
        background: "#eee",
        color: "#202020",
        padding: "10px 15px",
        maxWidth: "80%",
        margin: "10px",
        wordBreak: "break-all",
        marginRight: "auto",
    }
}),
);

export default MessageStyles