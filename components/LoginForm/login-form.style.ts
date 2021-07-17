import { makeStyles, Theme, createStyles } from '@material-ui/core';

const LoginFormStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            borderRadius: "10px",
            padding: "30px"
        },
        title: {
            marginBottom: '35px',
            textAlign: "left",
            [theme.breakpoints.down('lg')]: {
                fontSize: 25
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 35,
                paddingBottom: 20
            }
        },
        formInput: {
            margin: '0px 0px 20px 0px',
            background: "#fff"
        },
        formButton: {
            fontSize: 17,
            fontWeight: "bold",
            padding: 13
        },
        registerLink: {
            fontSize: 17,
            borderBottom: "1px solid #7f6e9b",
            [theme.breakpoints.down('lg')]: {
                fontSize: 15
            }
        },
        formLine: {
            margin: '20px 0px'
        },
        alert: {
            marginBottom: 20
        }
    }));

export default LoginFormStyles