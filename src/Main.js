import React from 'react';
import { Route, Switch } from 'react-router-dom';
import trackList from './tracks';
import App from './App.js';
import Archive from './Archive.js';
import NoMatch from './NoMatch.js';
import BrowserRouter from 'react-router-dom/BrowserRouter';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            tracks: [],
            currentTrack: {}
        };
    }
    
    render() {
        return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/archive" render={(props) => <Archive {...props} tracks={trackList.tracks} />} />
                <Route component={NoMatch} />
            </Switch>
        </BrowserRouter>
      );
    }

    componentDidMount() {
        this.setState({tracks: trackList.tracks});
      }
}

export default Main;