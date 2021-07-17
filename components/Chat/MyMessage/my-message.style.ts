import { makeStyles, Theme, createStyles } from '@material-ui/core';

const MyMessageStyles = makeStyles((theme: Theme) =>
    createStyles({
        message:{
            background: theme.palette.primary.main,
            color: "#fff",
            padding: "10px 15px",
            maxWidth: "80%",
            marginLeft: "auto",
            margin: "10px",
            wordBreak: "break-all",
        }
    }),
);

export default MyMessageStyles