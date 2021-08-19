import { makeStyles, Theme, createStyles } from '@material-ui/core';

const MobileNavStyles = makeStyles((theme: Theme) =>
    createStyles({
        root:{
            width: "100%",
            position: "fixed",
            maxHeight: 48,
            bottom: 0,
            left: 0,
            right: 0,
            borderTop: "1px solid #ccc",
            [theme.breakpoints.up('md')]: {
                display: "none"
            } 
        }
    }),
);

export default MobileNavStyles