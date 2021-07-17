import { makeStyles, Theme, createStyles } from '@material-ui/core';
const DatePickerStyles = makeStyles((theme: Theme) =>
    createStyles({
        dataPicker:{
            width: "100%",
            marginBottom: "20px"
        }
    }),
);

export default DatePickerStyles