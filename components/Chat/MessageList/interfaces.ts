import { GridSize } from "@material-ui/core";
import Store from "../../../store/store";

export interface MessageListProps{
    store: Store,
    xs?: boolean | GridSize | undefined,
    sm?: boolean | GridSize | undefined,
    md?: boolean | GridSize | undefined,
    lg?: boolean | GridSize | undefined,
    xl?: boolean | GridSize | undefined
}