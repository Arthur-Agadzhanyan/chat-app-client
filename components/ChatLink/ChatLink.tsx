import React, { FC } from 'react';
import { createStyles, makeStyles, Theme, Card, CardHeader, Avatar } from "@material-ui/core"
import Link from "next/link"

const useStyles = makeStyles((theme: Theme) =>
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

interface Props {
    username: string,
    chatLink: string
}

const ChatLink: FC<Props> = ({ username, chatLink }) => {
    const classes = useStyles()
    return (
        <Link href={`/chats/${chatLink}`}>
            <Card elevation={0} className={classes.chatLink}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" color="primary">
                            {username[0].toUpperCase()}
                        </Avatar>
                    }
                    title={username}
                />
            </Card>
        </Link>

    );
}

export default ChatLink;
