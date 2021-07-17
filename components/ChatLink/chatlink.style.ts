import { createStyles, makeStyles, Theme, Card, CardHeader, Avatar } from "@material-ui/core"

const ChatLinkStyles = makeStyles((theme: Theme) =>
createStyles({
    chatLink:{
        transition: "all .2s linear",
        cursor: "pointer",
        '&:hover':{
            background: "#efefef"
        }
    }
}),
);

export default ChatLinkStyles