import React from 'react';
import PropTypes from 'prop-types';

const QueenItem = ({ name, image_url }) => (
  <figure>
    <img src={image_url} alt={name} width="200"/>
    <figcaption>{name}</figcaption>
  </figure>
);

QueenItem.propTypes = {
  name: PropTypes.string.isRequired,
  image_url: PropTypes.string
};

export default QueenItem;
