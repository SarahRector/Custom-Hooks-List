import React from 'react';
import PropTypes from 'prop-types';

const CharacterItem = ({ name, image_url, quote }) => (
  <div data-testid="details">
    <h1> {name} </h1>
    <img src={image_url} alt={name} />
    <p> {quote} </p>
  </div>
);

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  image_url: PropTypes.string,
  quote: PropTypes.string
};

export default CharacterItem;
