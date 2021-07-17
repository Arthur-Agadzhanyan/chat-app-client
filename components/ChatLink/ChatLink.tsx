import React, { FC } from 'react';
import Link from "next/link"
import { Card, CardHeader, Avatar } from "@material-ui/core"
import ChatLinkStyles from './chatlink.style';

interface Props {
    username: string,
    chatLink: string
}

const ChatLink: FC<Props> = ({ username, chatLink }) => {
    const classes = ChatLinkStyles()
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
