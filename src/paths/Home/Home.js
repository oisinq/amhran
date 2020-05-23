import React, { useEffect } from 'react';

import SEO from '../../components/SEO/SEO';
import Description from '../../components/Description/Description';
import Track from '../../components/Track/Track';
import Footer from '../../components/Footer/Footer';
import './Home.css';

const Home = ({main, track}) => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="Home">
      <SEO
          title={`Amhrán #${track.order}: ${track.artistName} - ${track.songName}`}
          url={window.location.href}
          image={`${window.location.href}images/${track.image}`}
        />
      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous"></link>
      <Track className="track" track={track} main={main} />
      <Description track={track}/>
      <Footer />
    </div>
  );
}

export default Home;
