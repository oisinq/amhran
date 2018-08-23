import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App.js';
import Archive from './Archive.js';
import NoMatch from './NoMatch.js';
import BrowserRouter from 'react-router-dom/BrowserRouter';

class Main extends React.Component {
    render() {
      return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/archive" component={Archive} />
                <Route component={NoMatch} />
            </Switch>
        </BrowserRouter>
      );
    }
}

export default Main;