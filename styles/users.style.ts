import { makeStyles, Theme, createStyles } from '@material-ui/core';

const UsersStyles = makeStyles((theme: Theme) =>
    createStyles({
        topPanel: {
            borderBottom: "1px solid #ccc"
        },
        pageTitle: {
            padding: "20px 0px ",
            textAlign: "center",
            background: "#fff",
        },
    }));

export default UsersStyles