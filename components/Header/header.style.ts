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
        }
    }),
);

export default HeaderStyles