import { makeStyles, Theme, createStyles } from '@material-ui/core';

const HeaderStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar:{
            height: 48
        },
        content: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            margin: 0,
            padding: 0
        },
        toolbar: {
            minHeight: 48
        },
        avatar:{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            height: 48,
            padding: "0px 12px 0px 15px",
            transition: "all .2s linear",
            '&:hover': {
                background: theme.palette.primary.dark
            }
        },
        avatar__text:{
            marginRight: 7,
            fontSize: 17
        },
        avatar__image:{
            height: 30,
            width: 30
        },
        avatar__icon:{
            marginLeft: 3,
            fontSize: 18
        },
        menu:{
            padding: 0,
            marginTop: 35,
        },
        poppup:{
            border: "1px solid #ccc",
            background: "#fff",
            padding: "10px 20px",

        },
        poppup__title:{
            marginBottom: 10,
            fontSize: 20
        },
        poppup__link:{
            display: "block",
            marginBottom: 5,
            fontSize: 17,
            padding: "10px 5px"
        }
    }),
);

export default HeaderStyles