import { GridSize } from "@material-ui/core";
import ChatsStore from "../../../store/chats";
import Store from "../../../store/store";

export interface MessageListProps{
    chatsStore: ChatsStore,
    authStore: Store
    xs?: boolean | GridSize | undefined,
    sm?: boolean | GridSize | undefined,
    md?: boolean | GridSize | undefined,
    lg?: boolean | GridSize | undefined,
    xl?: boolean | GridSize | undefined
}

export interface ChatMessage{
    author: {
        firstName: string,
        lastName: string,
        _id: string
    },
    createdAt: number,
    text: string,
    visible: string,
    _id: string
}