import { makeStyles, Theme, createStyles } from '@material-ui/core';
const VerificationAlertStyles = makeStyles((theme: Theme) =>
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
        },
        title: {
            marginBottom: 20,
            fontWeight: 'bold'
        },
        getCodeBtn: {
            marginTop: 20,
            padding: "10px 20px"
        },
        alert: {
            margin: "10px 0px"
        }
    }),
);

export default VerificationAlertStyles