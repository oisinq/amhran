import React, { Component } from 'react';
import Description from './components/Description/Description';
import Track from './components/Track/Track';
import Background from './images/corners_white.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" /> 
        <Track className="track"/>
        <Description />
      </div>
    );
  }
}

export default App;
