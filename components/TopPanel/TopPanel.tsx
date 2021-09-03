import React, { FC, useEffect, useState } from 'react';
import { Typography, Box, TextField } from '@material-ui/core';
import TuneIcon from '@material-ui/icons/Tune';
import TopPanelStyles from './top-panel.style';
import { TopPanelProps } from './interfaces';
import AdvancedSearch from './AdvancedSearch/AdvancedSearch';

const TopPanel: FC<TopPanelProps> = ({ title, countries, changeCountry, changeAge, advancedForm }) => {
    const classes = TopPanelStyles()
    const [advancedSearch, setAdvancedSearch] = useState<boolean>(false)

    const toggleAdvancedSettings = () => {
        setAdvancedSearch(!advancedSearch)
    }

    return (
        <Box className={classes.topPanel}>
            
            <Box className={classes.top}>
                {title && <Typography variant="h4" className={classes.pageTitle}>{title}</Typography>}
            </Box>
            
            <Box className={classes.searchContainer}>
                    <TextField
                        className={classes.search}
                        fullWidth
                        id="search"
                        name="name"
                        label="Поиск"
                        type='text'
                        variant='outlined'
                        value={advancedForm.name}
                        onChange={changeAge}
                        InputProps={{
                            endAdornment: (
                                <Typography className={classes.advancedSearch} onClick={toggleAdvancedSettings}>
                                    <TuneIcon className={classes.advancedSearchIcon} />
                                </Typography>
                            )
                        }}
                    />
                

                {advancedSearch && <AdvancedSearch countries={countries} changeCountry={changeCountry} changeAge={changeAge} advancedForm={advancedForm} />}


            </Box>
        </Box>
    );
}

export default TopPanel;
