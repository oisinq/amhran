import React, { Component } from 'react';
import CardList from '../../components/CardList/CardList';
import Nav from '../../components/Nav/Nav';
import './Archive.css';

class Archive extends Component {
  render() {
    return (
      <div className="Archive">
      <Nav />
        <h1 className="archiveTitle">Archive</h1>
        <CardList tracks={this.props.tracks}></CardList>
      </div>
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
}

export default Archive;
