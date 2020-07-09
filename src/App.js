import React from 'react';
import { Route, Router, useHistory } from 'react-router-dom';
import { Shell } from './components/layout';

const App = () => {
    const history = useHistory();

    return (
        <Router history={history}>
            <Route path="/">
                <Shell />
            </Route>
        </Router>
    );
};

export default App;
