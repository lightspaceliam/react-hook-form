import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const PageNotFound: FC = (): JSX.Element => {

    return(
        <Grid container>
            <Grid item xs={12}>
                <Typography component='h1'>Page Not Found</Typography>
            </Grid>
        </Grid>
    );
};

export default PageNotFound;