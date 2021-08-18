import React, { FC, useEffect, useState } from 'react';
import { Typography, Box, TextField } from '@material-ui/core';
import TuneIcon from '@material-ui/icons/Tune';
import TopPanelStyles from './top-panel.style';
import { TopPanelProps } from './interfaces';
import AdvancedSearch from './AdvancedSearch/AdvancedSearch';

const TopPanel: FC<TopPanelProps> = ({ getCountries, changeCountry, changeAge, advancedForm }) => {
    const classes = TopPanelStyles()
    const [advancedSearch, setAdvancedSearch] = useState<boolean>(false)

    const [countries, setCountries] = useState<string[]>([])

    const toggleAdvancedSettings = () => {
        setAdvancedSearch(!advancedSearch)
    }

    useEffect(() => {
        getCountries().then((data: any) => {
            setCountries(data)
        })
    }, [])

    return (
        <Box className={classes.topPanel}>
            <Typography variant="h4" className={classes.pageTitle}>Поиск друзей</Typography>
            <Box className={classes.searchContainer}>
                <TextField
                    className={classes.search}
                    fullWidth
                    id="search"
                    name="search"
                    label="Поиск"
                    type='text'
                    variant='outlined'
                />
                <Typography className={classes.advancedSearch} onClick={toggleAdvancedSettings}>
                    <TuneIcon className={classes.advancedSearchIcon} /> Расширенный поиск
                </Typography>

                {advancedSearch && <AdvancedSearch countries={countries} changeCountry={changeCountry} changeAge={changeAge} advancedForm={advancedForm} />}


            </Box>
        </Box>
    );
}

export default TopPanel;
