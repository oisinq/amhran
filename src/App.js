import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import trackList from './tracks';
import Home from './paths/Home/Home';
import Archive from './paths/Archive/Archive';
import BrowserRouter from 'react-router-dom/BrowserRouter';

const App = () => {
    const TrackFinder = ({ match }) => {
        let param = match.params.trackno;
        let parsed = parseInt(param, 10);

        if (isNaN(parsed) || parsed > trackList.tracks.length || parsed <= 0) {
            return <Home track={trackList.tracks[trackList.tracks.length-1]} main="true" />
        } else {
            return <Home track={trackList.tracks[parsed-1]} main="false" />
        }
    };

    return (
        <div className="App">
          <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={TrackFinder} />
                  <Route exact path="/archive" render={(props) => <Archive {...props} tracks={trackList.tracks} />} />
                  <Route exact path="/:trackno(\d+)" component={TrackFinder} />
                  <Redirect to="/" />
              </Switch>
          </BrowserRouter>
        </div>
      );
}

export default App;