import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

const SEO = props => {
  const {title, description, url, image, type, siteName, twitterCard} = props;

  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0
  });

  console.log(`../../images/${image}`)

  let staticImageRelativeUrl = require(`../../images/${image}`);

  let imageUrl = window.location.origin + staticImageRelativeUrl;

  useEffect(() => {
    var img = new Image();

    img.onload = function() {
      setDimensions({
        height: img.naturalHeight,
        width: img.naturalWidth
      })
    }

    img.src = imageUrl;
  }, [imageUrl])

  

  return (
    <Helmet>
      <meta property="og:title" content={title} />
      <meta property="twitter:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="twitter:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content={dimensions.width} />
      <meta property="og:image:height" content={dimensions.height} />
      <meta property="twitter:image" content={imageUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:site" content="@amhranIE" />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  siteName: PropTypes.string,
  twitterCard: PropTypes.string,
};

SEO.defaultProps = {
  title: '',
  description: '',
  url: '',
  image: '',
  type: 'music.song',
  siteName: 'Amhrán',
  twitterCard: 'summary_large_image',
};

export default SEO;