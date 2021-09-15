import { makeStyles, Theme, createStyles } from '@material-ui/core';

const MyMessageStyles = makeStyles((theme: Theme) =>
    createStyles({
        message:{
            margin: "10px",
            
            maxWidth: "80%",
            wordBreak: "break-all",
            marginLeft: "auto",
        },
        author:{
            color: theme.palette.primary.main,
            fontWeight: "bold",
            textAlign: "right"
        },
        text:{
            background: theme.palette.primary.main,
            color: "#fff",
            padding: "10px 15px 10px 15px",
            margin: "5px 0px ",
            borderRadius: 5
            
        },
        time:{
            textAlign: "right",
            fontSize: 12,
            paddingTop: 3,
            // marginLeft: "auto"
        }
    }),
);

export default MyMessageStyles