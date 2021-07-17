import 'date-fns';
import React, { FC } from 'react';
import {MuiPickersUtilsProvider,KeyboardDatePicker,} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicerProps } from './interfaces';
import DatePickerStyles from './date-picker.style';

const DatePicker: FC<DatePicerProps> = ({id,label,selectedDate,setSelectedDate,error}) => {
    const classes = DatePickerStyles()

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
