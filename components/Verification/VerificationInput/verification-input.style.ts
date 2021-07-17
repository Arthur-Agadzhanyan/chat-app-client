import { makeStyles, Theme, createStyles } from '@material-ui/core';

const VerificationInputStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            minHeight: "90vh",
            flexGrow: 2,
            background: "#f5f5f5"
        },
        container: {
            background: "#fff",
            borderRadius: 20,
            boxShadow: "0px 0px 16px #ccc",
            padding: "70px 30px 35px 30px ",
            textAlign: "center",
            [theme.breakpoints.down('xs')]: {
                borderRadius: 0,
                boxShadow: "0px 0px 5px #ccc",
                padding: "70px 5px 35px 5px ",
            },
        },
        title: {
            marginBottom: 20,
            fontWeight: 'bold'
        },
        logoutBtn: {
            marginTop: 20,
            padding: "10px 20px"
        },
        form: {
            padding: "20px 30px 10px 30px"
        }
    }),
);

export default VerificationInputStyles