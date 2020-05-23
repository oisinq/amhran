import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

const SEO = props => {
  const {title, description, url, image, type, siteName, twitterCard} = props;

  return (
    <Helmet>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:image" content={image} />
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