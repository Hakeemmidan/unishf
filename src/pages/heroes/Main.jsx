import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HeroesTable } from './HeroesTable';
import { HeroesFilter } from './HeroesFilter';

const AlignInPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 70vh;
`;

const AllHeroesContainer = styled.div`
  display: flex;
  max-width: 80vw;
  @media (max-width: ${(props) => props.theme.mobileBreakpoint}) {
    flex-direction: column;
  }
`;

export const AllHeroes = ({ heroes, setHeroes }) => (
  <AlignInPage>
    <AllHeroesContainer>
      <HeroesFilter setHeroes={setHeroes} />
      <HeroesTable heroes={heroes} />
    </AllHeroesContainer>
  </AlignInPage>
);

AllHeroes.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.object).isRequired,
  setHeroes: PropTypes.func.isRequired
};
