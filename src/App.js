import React, { Component } from 'react';
import Description from './components/Description/Description';
import Track from './components/Track/Track';
import './App.css';

window.onresize = function(){
  document.body.height = window.innerHeight;
}
window.onresize(); // called to initially set the height.


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />  */}
        <Track className="track"/>
        <Description />
      </div>
    );
  }
}

export default App;
