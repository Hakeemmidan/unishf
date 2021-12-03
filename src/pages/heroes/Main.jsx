import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HeroesTable } from './HeroesTable';
import { HeroesFilter } from './HeroesFilter';

const AllHeroesPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 70vh;
`;

const DisplayFlex = styled.div`
  display: flex;
`;

export const AllHeroes = ({ heroes, setHeroes }) => (
  <AllHeroesPageContainer>
    <DisplayFlex>
      <HeroesFilter setHeroes={setHeroes} />
      <HeroesTable heroes={heroes} />
    </DisplayFlex>
  </AllHeroesPageContainer>
);

AllHeroes.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.object).isRequired,
  setHeroes: PropTypes.func.isRequired
};
