import { Grid, TextField, makeStyles, Theme, createStyles } from '@material-ui/core';

export const ChatListStyles = (mbVisible: boolean) => {
    return makeStyles((theme: Theme) =>
        createStyles({
            chats: {
                // display: "none",
                background: "#fff",
                height: "100%",
                paddingTop: 15,
                borderRight: "1px solid #ccc",
                [theme.breakpoints.down('sm')]: {
                    display: mbVisible ? "block" : "none",
                    [theme.breakpoints.down('sm')]: {
                        borderRight: "none",
                        height: "100%",
                        width: "100%",
                    }
                }
            },
            chatSearch: {
                width: "90%",
                height: "10%",
                margin: "0 auto",

                [theme.breakpoints.down('sm')]: {
                    display: mbVisible ? "block" : "none"
                }
            },
            chatSearchInput: {
                width: "100%"
            },
            chatList: {
                height: "90%",
                overflowY: "auto",
                overflowX: "hidden"
            },
        }),
    );
}