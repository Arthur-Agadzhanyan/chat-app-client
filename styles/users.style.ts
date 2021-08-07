import { makeStyles, Theme, createStyles } from '@material-ui/core';

const UsersStyles = makeStyles((theme: Theme) =>
    createStyles({
        topPanel: {
            borderBottom: "1px solid #ccc"
        },
        pageTitle: {
            padding: "25px",
            borderBottom: "1px solid #ccc"
        },
        searchContainer:{
            padding: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems:"center",
            flexWrap: "wrap",
            transition: "all .2s linear"
        },
        search:{
            flex: "0 1 80%"
        },
        advancedSearch:{
            flex: "0 1 20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 17,
            cursor: "pointer"
        },
        advancedSearchIcon:{
            marginRight: "10px"
        },
        advancedSearchContainer:{
            width: "100%",
            display: "flex",
            alignItems: "center",
            paddingTop: 20
        },
        searchLocation:{
            flex: "0 1 50%"
        },
        searchAge:{
            flex: "0 1 50%"
        },
        blockTitle:{
            paddingBottom: 10,
            fontSize: 20
        },
        ageInputs:{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },
        ageInput:{
            flex: "0 1 49%"
        }
    }));

export default UsersStyles