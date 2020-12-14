import React from 'react';
import {BrowserRouter as Switch, Route} from 'react-router-dom';
import {publicRoutes} from './routes';
import { SnackbarProvider,withSnackbar } from 'notistack';

const Routes = () => {
    return (
        <SnackbarProvider
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            dense={false}
            hideIconVariant
            preventDuplicate
        >
        <Switch>
            {publicRoutes.map((route) => (
                <Route exact path={route.url} key={route.url} component={withSnackbar(route.component)} />
            ))}
        </Switch>
        </SnackbarProvider>
    );
}

export default Routes;