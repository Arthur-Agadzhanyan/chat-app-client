import { makeStyles, Theme, createStyles } from '@material-ui/core';

const TopPanelStyles = makeStyles((theme: Theme) =>
    createStyles({
        topPanel: {
            borderBottom: "1px solid #ccc",
            position: 'relative'
        },
        top:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: "1px solid #ccc",
            padding: "25px",
        },
        pageTitle: {
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
            flex: "0 1 100%",
            outline: "none"
        },
        advancedSearch:{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 17,
            cursor: "pointer"
        },
        advancedSearchIcon:{
            marginRight: "5px"
        },
        advancedSearchContainer:{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            paddingTop: 20
        },
        searchBlock:{
            flex: "0 1 49%",
            [theme.breakpoints.down('xs')]:{
                flex: "0 1 100%",
                marginTop: 15
            },
        },
        locationInput:{
            width: "100%"
        },
        blockTitle:{
            paddingBottom: 10,
            fontSize: 20
        },
        ageLabel:{
            paddingLeft: 15,
            marginTop: "-3px"
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

export default TopPanelStyles