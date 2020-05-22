import React, { FC } from 'react';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';
import * as createHistory from 'history';

import Layout from '../components/Layouts/Layout';
import Home from '../pages/home/Home';
import PageNotFound from '../pages/exceptions/PageNotFound';

export const history = createHistory.createBrowserHistory();

const AppRouter: FC = (): JSX.Element => {

    return (
        <Router history={history}>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />

                    <Route component={PageNotFound} />
                </Switch>
            </Layout>
        </Router>
    );
};

export default AppRouter;