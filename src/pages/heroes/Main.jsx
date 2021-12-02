import React from 'react';
import PropTypes from 'prop-types';
import { HeroesTable } from './HeroesTable';

export const AllHeroes = ({ heroes }) => {
  return <HeroesTable heroes={heroes} />;
};

AllHeroes.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.object).isRequired
};
