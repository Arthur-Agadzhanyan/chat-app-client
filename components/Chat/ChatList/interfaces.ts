import { GridSize } from "@material-ui/core";
import Store from "../../../store/store";

export interface ChatListProps{
    store: Store,
    mbVisible: boolean,
    xs?: boolean | GridSize | undefined,
    sm?: boolean | GridSize | undefined,
    md?: boolean | GridSize | undefined,
    lg?: boolean | GridSize | undefined,
    xl?: boolean | GridSize | undefined
}