import React from 'react';
import './Footer.css';
import Submissions from '../Submissions/Submissions';
import Twitter from '../../images/twitter.svg'
import Facebook from '../../images/facebook.svg'
import Instagram from '../../images/instagram.svg'
import Logo from '../Logo/Logo';

const Footer = () => {
    return(
    <div className="footer">
        <div className="lineBreak"></div>
        <span className="footerHeader">Every day, Amhrán showcases a new song by an Irish artist.</span>
        <span className="footerText">Our goal is to create a space where people can find new music and talented artists can have their work promoted.</span>
        <span className="footerText">Are you an Irish artist who released music recently? Are you a music fan who wants to share a song you love? Submit a track below or email "info[at]amhran.ie".</span>
        <span className="footerTextSmall">Note: Please only send Bandcamp, Soundcloud or Spotify links.</span>
        <Submissions />
        <div className="bottomFooter">
            <Logo/>
            <div className="socials">
                <div className="footerElement"><a href="https://twitter.com/amhranIE"><img src={Twitter} alt="Twitter" height="43"></img></a></div>
                <div className="footerElement"><a href="https://facebook.com/amhranIE"><img src={Facebook} alt="Facebook" height="43"></img></a></div>
                <div className="footerElement"><a href="https://instagram.com/amhranIE"><img src={Instagram} alt="Instagram" height="43"></img></a></div>
            </div>
        </div>
        <span id="veryBottom">Site by <a href="https://oisin.io">Oisín Quinn</a></span>
    </div>
);
}

export default Footer;