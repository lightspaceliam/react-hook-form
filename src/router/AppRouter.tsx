import React, { FC } from 'react';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import * as createHistory from 'history';
import configureStore from '../store';

import Layout from '../components/Layouts/Layout';
import Home from '../pages/home/Home';
import ReactHookFormExample from '../pages/forms/ReactHookFormExample';
import PageNotFound from '../pages/exceptions/PageNotFound';

export const history = createHistory.createBrowserHistory();
const store = configureStore();

const AppRouter: FC = (): JSX.Element => {

    return (
        <Provider store={store}>
            <Router history={history}>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/react-hook-form' component={ReactHookFormExample} />

                        <Route component={PageNotFound} />
                    </Switch>
                </Layout>
            </Router>
        </Provider>
    );
};

export default AppRouter;