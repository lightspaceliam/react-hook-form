import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles from './styles/home';

const Home: FC = (): JSX.Element => {
    const classes = styles();

    return (
        <Grid container alignItems='center'>
            <Grid item 
                xs={12}>
                <Typography 
                    component='h1'
                    className={classes.h1}>
                    Sandbox Home
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Home;