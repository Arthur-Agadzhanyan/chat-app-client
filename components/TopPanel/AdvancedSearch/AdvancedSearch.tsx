import { Typography, Box, TextField, Zoom, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { Autocomplete, createFilterOptions } from '@material-ui/lab';
import React, { FC } from 'react';
import TopPanelStyles from '../top-panel.style';
import { AdvancedSearchProps } from './interfaces';

const AdvancedSearch: FC<AdvancedSearchProps> = ({ countries, changeCountry, changeAge, advancedForm }) => {
    const classes = TopPanelStyles()

    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: (option: string) => option,
        limit: 100
    });

    return (
        <Zoom in={true}>
            <Box className={classes.advancedSearchContainer}>

                <Box className={classes.searchBlock}>
                    <Typography className={classes.blockTitle}>Регион</Typography>
                    <Autocomplete
                        id="location"
                        className={classes.locationInput}
                        options={ countries}
                        getOptionLabel={(country) => country}
                        onChange={changeCountry}
                        filterOptions={filterOptions}
                        value={advancedForm.location}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                name="location"
                                label="Город"
                                variant="outlined"
                                value={advancedForm.location}
                            />
                        )}
                    />
                </Box>
                <Box className={classes.searchBlock}>
                    <Typography className={classes.blockTitle}>Возраст</Typography>
                    <Box className={classes.ageInputs}>
                        <FormControl className={classes.ageInput}>
                            <InputLabel className={classes.ageLabel} id="age_from-label">От</InputLabel>
                            <Select
                                id="age_from"
                                name="ageFrom"
                                label="От"
                                labelId="age_from-label"

                                value={advancedForm.ageFrom}
                                onChange={changeAge}
                                variant='outlined'
                            >
                                {[...Array(67).keys()].map((item, i) => (
                                    <MenuItem key={`${item}_${i}`} value={i + 14}>{i + 14}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl className={classes.ageInput}>
                            <InputLabel className={classes.ageLabel} id="age_to-label">До</InputLabel>
                            <Select

                                id="age_to"
                                name="ageTo"
                                label="До"
                                value={advancedForm.ageTo}
                                variant='outlined'
                                labelId="age_to-label"
                                onChange={changeAge}
                            >
                                {[...Array(67).keys()].map((item, i) => (
                                    <MenuItem key={`${item}_${i}`} value={i + 14}>{i + 14}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                    </Box>
                </Box>
            </Box>
        </Zoom>
    );
}

export default AdvancedSearch;
