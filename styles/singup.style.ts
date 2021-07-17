import { makeStyles, Theme, createStyles } from '@material-ui/core';

const SignUpStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            minHeight: "100vh",
            width: "100%",
            background: "url('signupImage.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        },
        formContainer: {
            background: "#f5f5f5",
            boxShadow: "0px 0px 16px #f5f5f5",
            display: "flex",
            alignItems: 'center',
            justifyContent: "center",
            flexDirection: "column",
            padding: "50px 20px",
            borderRadius: "20px",
            [theme.breakpoints.down('xs')]:{
                minHeight: "100vh",
                borderRadius: "0px",
                padding: "30px 3px",
            }
        }
    }));

export default SignUpStyles