import { GridSize } from "@material-ui/core";
import ChatsStore from "../../../store/chats";
import Store from "../../../store/store";

export interface ChatListProps{
    store: ChatsStore,
    mbVisible: boolean,
    xs?: boolean | GridSize | undefined,
    sm?: boolean | GridSize | undefined,
    md?: boolean | GridSize | undefined,
    lg?: boolean | GridSize | undefined,
    xl?: boolean | GridSize | undefined
}