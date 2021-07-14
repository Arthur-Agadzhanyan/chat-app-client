import 'date-fns';
import React, { FC } from 'react';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

interface Props{
    id: string,
    label: string,
    selectedDate: Date | null,
    setSelectedDate(date: Date | null): any,
    error: boolean
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        dataPicker:{
            width: "100%",
            marginBottom: "20px"
        }
    }),
);

const DatePicker: FC<Props> = ({id,label,selectedDate,setSelectedDate,error}) => {
    const classes = useStyles()

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                className = {classes.dataPicker}
                disableToolbar
                variant="dialog"
                format="dd/MM/yyyy"
                margin="normal"
                id={id}
                label={label}
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                error={error}
            />
        </MuiPickersUtilsProvider>
    );
}

export default DatePicker;
