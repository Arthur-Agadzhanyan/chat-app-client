import { makeStyles, Theme, createStyles } from '@material-ui/core';

const LoginStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      minHeight: "100vh",
      overflow: 'hidden'
    },
    brandContainer: {
      width: "100%",
      minHeight: '100vh',
      background: "url('loginImage.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#FFF",
    },
    brand: {
      position: "absolute",
      top: 20,
      left: 20,
      fontSize: 20,
      marginBottom: '30px',

    },
    titleContainer: {
      height: "100%",
      marginLeft: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    brandTitle: {
      padding: "20px 0px",
      [theme.breakpoints.down('md')]: {
        fontSize: 60
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 40
      }
    },
    brandSubtitle: {
      [theme.breakpoints.down('md')]: {
        fontSize: 30
      }
    },
    formContainer: {
      width: "100%",
      minHeight: "100vh",
      background: "#f5f5f5",
      display: "flex",
      alignItems: 'center',
      justifyContent: "center",
      flexDirection: "column",
    },
    phoneArrow: {
      position: "absolute",
      bottom: 20,
      left: '50%',
      margin: "0 auto",
      transform: "translate(-50%,0%)",
      fontSize: 35,
      [theme.breakpoints.up('md')]: {
        display: "none"
      }
    }
  }));

export default LoginStyles