import trackList from './tracks';
import React from 'react';
import Description from './components/Description/Description';
import Track from './components/Track/Track';
import Footer from './components/Footer/Footer';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
        tracks: [],
        currentTrack: {}
    };
}

  render() {
    let tracks = trackList.tracks;
    let index = tracks.length - 1;
    let current = tracks[index];

    return (
      <div className="App">
        <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous"></link>
        <Track className="track" track={current} />
        <Description />
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    this.setState({tracks: trackList.tracks});
    let tracks = trackList.tracks;
    let index = tracks.length - 1;
    let current = tracks[index];
    this.setState({currentTrack: current});
  }
}

export default App;