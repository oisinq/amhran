import React from 'react';
import { Route, Switch } from 'react-router-dom';
import trackList from './tracks';
import Home from './paths/Home/Home';
import Launch from './components/Launch/Launch';
import Archive from './paths/Archive/Archive';
import NoMatch from './paths/NoMatch/NoMatch';
import BrowserRouter from 'react-router-dom/BrowserRouter';

class App extends React.Component {

    render() {
        const TrackFinder = ({ match }) => {
            console.log("route stuff!")
            console.log("length", trackList.tracks.length)
            let param = match.params.trackno;
            let parsed = parseInt(param, 10);

            if (isNaN(parsed) || parsed > trackList.tracks.length || parsed <= 0) {
                console.log(parsed, "Doesn't exist!");
                return <Home track={trackList.tracks[trackList.tracks.length-1]} main="true" />
            } else {
                console.log("Argument:", parsed)
                return <Home track={trackList.tracks[parsed-1]} main="false" />
            }
        }

        return (
            <Launch />
        // <div className="App">
        //   <BrowserRouter>
        //       <Switch>
        //           <Route exact path="/" component={TrackFinder} />
        //           <Route exact path="/archive" render={(props) => <Archive {...props} tracks={trackList.tracks} />} />
        //           <Route exact path="/:trackno" component={TrackFinder} />
        //           <Route component={NoMatch} />
        //       </Switch>
        //   </BrowserRouter>
        // </div>
      );
    }
}

export default App;