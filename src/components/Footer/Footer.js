import React from 'react';
import './Footer.css';
import Submissions from '../Submissions/Submissions';
import Twitter from '../../images/twitter.svg'
import Facebook from '../../images/facebook.svg'
import Logo from '../Logo/Logo';
// import Logo from '../../images/logo.svg'

const Footer = () => {
    return(
    <div className="footer">
        <div className="lineBreak"></div>
        <span className="footerHeader">Every day, Amhrán showcases a new song by an Irish artist.</span>
        <span className="footerText">We aren’t a business. We aren’t trying to make any money. Our only goal is to showcase great Irish music and to help people like you discover something new.</span>
        <span className="footerText">Are you an Irish artist who released music recently? Are you a music fan who wants to share a song you love? Submit a track below.</span>
        <span className="footerTextSmall">Note: we prefer Soundcloud links, then Bandcamp, Spotify, then anything else. If you're an artist, we might send you an email to work out some details.</span>
        <Submissions />
        <div className="bottomFooter">
            {/* <div className="footerElement"><img src={Logo} alt="logo" height="53"></img></div> */}
            <Logo/>
            <div className="socials">
                <div className="footerElement"><a href="https://twitter.com/amhranIE"><img src={Twitter} alt="Twitter" height="43"></img></a></div>
                <div className="footerElement"><a href="https://facebook.com/amhranIE"><img src={Facebook} alt="Facebook" height="43"></img></a></div>
            </div>
        </div>
        <span id="veryBottom">Site by <a href="https://oisin.io">Oisin Quinn</a></span>
    </div>
);
}

export default Footer;