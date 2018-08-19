import React, { Component } from 'react';
import Description from './components/Description/Description';
import Track from './components/Track/Track';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Track />
        <Description />
      </div>
    );
  }
}

export default App;
