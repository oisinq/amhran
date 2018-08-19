import React, { Component } from 'react';
import Description from './components/Description/Description';
import Track from './components/Track/Track';
import Footer from './components/Footer/Footer'

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous"></link>
        <Track className="track"/>
        <Description />
        <Footer />
      </div>
    );
  }
}

export default App;
