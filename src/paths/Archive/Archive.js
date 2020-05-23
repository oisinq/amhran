import React, { useEffect } from 'react';
import CardList from '../../components/CardList/CardList';
import Nav from '../../components/Nav/Nav';
import './Archive.css';
import '../../components/Footer/Footer.css'
import Twitter from '../../images/twitter.svg'
import Facebook from '../../images/facebook.svg'
import Logo from '../../components/Logo/Logo'

const Archive = ({tracks}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Archive">
      <div>
        <Nav origin="archive" />
        <h1 className="archiveTitle">Archive</h1>
        <CardList tracks={tracks}></CardList>
      </div>
      <div><div className="bottomFooter">
          <div className="footerElement"><Logo /> </div>
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

export default Archive;
