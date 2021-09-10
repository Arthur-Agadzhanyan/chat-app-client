import { makeStyles, Theme, createStyles } from '@material-ui/core';

const FriendsStyles = makeStyles((theme: Theme) =>
    createStyles({
        no_friends:{
            background: "#eee",
            fontSize: 21,
            padding: "15px 60px",
            borderRadius: 50,
            marginTop: "20vh"
        }
    }),
);

export default FriendsStyles