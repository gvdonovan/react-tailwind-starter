import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, ColorPalettePage } from '../pages';

const routes = () => {
    return (
        <Switch>
            {/* <Route path="/colors">
                <ColorPalettePage />
            </Route> */}
            <Route path="/">
                <ColorPalettePage />
            </Route>
        </Switch>
    );
};

export const Routes = routes;
