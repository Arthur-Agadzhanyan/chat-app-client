import { makeStyles, Theme, createStyles } from '@material-ui/core';

const SendMsgModalStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal:{
            maxWidth: 500,
            width: "100%",
            margin: "60px 0px",
            padding: 0,
            borderRadius: 5,
        },
        modal__header:{
            width: "100%",
            background: theme.palette.primary.main,
            padding: "15px",
            margin: 0
        },
        modal__title:{
            color: "#fff",
            margin: 0,
            fontSize: 23
        },
        modal__close:{
            fill: "#fff",
            top: "17px",
        },
        modal__content:{
            padding: "15px"
        },
        content__name:{
            margin: 0,
            color: "#202020",
            fontSize: 18,
            fontWeight: 500
        },
        modal__form:{
            padding: "0px 15px 15px 15px",
           
        },
        form__textarea:{
            resize: "none",
            width: "100%",
            padding: 5,
            fontFamily: "Roboto, sans-serif",
            fontSize: 14
        },
        form__controls:{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
        controls__button:{
            marginTop: 15,
            textTransform: "initial",
            letterSpacing: .6
        }
    }));
export default SendMsgModalStyles