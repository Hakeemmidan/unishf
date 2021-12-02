import React from 'react';
import PropTypes from 'prop-types';

export const HeroProfile = ({ hero }) => {
  return <div>{JSON.stringify(hero)}</div>;
};

HeroProfile.propTypes = {
  hero: PropTypes.object.isRequired
};
