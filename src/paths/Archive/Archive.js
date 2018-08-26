import React, { Component } from 'react';
import CardList from '../../components/CardList/CardList';
import Nav from '../../components/Nav/Nav';
import './Archive.css';
import '../../components/Footer/Footer.css'
import Twitter from '../../images/twitter.svg'
import Facebook from '../../images/facebook.svg'
import Logo from '../../images/logo.svg'

class Archive extends Component {
  render() {
    return (
      <div className="Archive">
        <div>
          <Nav origin="archive" />
          <h1 className="archiveTitle">Archive</h1>
          <CardList tracks={this.props.tracks}></CardList>
        </div>
        <div><div className="bottomFooter">
            <div className="footerElement"><img src={Logo} alt="logo" height="53"></img></div>
            <div className="socials">
                <div className="footerElement"><a href="https://twitter.com/amhranIE"><img src={Twitter} alt="Twitter" height="43"></img></a></div>
                <div className="footerElement"><a href="https://facebook.com/amhranIE"><img src={Facebook} alt="Facebook" height="43"></img></a></div>
            </div>
        </div>
       <div id="veryBottom"><span>Site by <a href="https://oisin.io">Oisin Quinn</a></span></div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
}

export default Archive;
