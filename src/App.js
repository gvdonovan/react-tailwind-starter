import React from 'react';
import { Route, Router, useHistory } from 'react-router-dom';
import { Shell } from './components/layout';
import { Routes } from './router';

const App = () => {
    const history = useHistory();

    return (
        <Router history={history}>
            <Route path="/">
                <Shell router={Routes} />
            </Route>
        </Router>
    );
};

export default App;
