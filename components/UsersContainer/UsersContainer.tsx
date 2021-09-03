import { Grid, Box, Typography, Fade } from '@material-ui/core';
import React, { FC } from 'react';
import { UsersContainerProps } from './interfaces';
import UsersContainerStyles from './users-container.style';

const UsersContainer: FC<UsersContainerProps> = ({ children, topPanel }) => {

    const classes = UsersContainerStyles()

    return (
        <Fade in={true}>
            <Grid className={classes.content} container>
                <Grid className={classes.users} item xs={12} md={8} lg={9} xl={8}>
                    {topPanel}
                    <div className={classes.usersList}>
                        {children}
                    </div>
                </Grid>
            </Grid>
        </Fade>
    );
}

export default UsersContainer;
