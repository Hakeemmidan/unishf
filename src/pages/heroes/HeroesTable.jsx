import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styled from 'styled-components';
import { themes } from '../../utils/themes';

const Table = styled.table`
  border-collapse: collapse;
  margin: 0 2rem;
`;

const MobileTable = styled(Table)`
  width: calc(90vw + 2rem);
  align-self: center;
  margin-bottom: 1rem;
`;

const Header = styled.th`
  border: ${(props) => props.theme.rems.border} solid ${(props) => props.theme.colors.border};
  padding: 0.5rem 1rem;
  text-align: left;
`;

const DataCell = styled.td`
  border: ${(props) => props.theme.rems.border} solid ${(props) => props.theme.colors.border};
  padding: 0.5rem 1rem;
  min-width: 8rem;
`;

const LeftAlignedDataCell = styled(DataCell)`
  text-align: left;
`;

const MobileHeader = styled(LeftAlignedDataCell)`
  width: 30%;
`;

const TableHead = styled.thead``;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  height: 2rem;
`;

const ClickableRow = styled(TableRow)`
  &:hover {
    cursor: pointer;
    background-color: beige;
  }
`;

const StarsContainer = styled.div`
  text-align: center;
`;

const FilledStar = styled(AiFillStar)`
  fill: ${(props) => props.theme.colors.primary};
`;

const UnfilledStar = styled(AiOutlineStar)``;

const renderStars = (id, rating) => {
  return (
    <StarsContainer>
      {[...Array(5)].map((_, i) => {
        if (i + 1 <= rating) {
          return <FilledStar key={`hero_${id}_star_${i}`} />;
        } else {
          return <UnfilledStar key={`hero_${id}_star_${i}`} />;
        }
      })}
    </StarsContainer>
  );
};

export const HeroesTable = ({ heroes }) => {
  const [isMobile, setIsMobile] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('resize', handleResize, false);
    handleResize();
    return () => window.removeEventListener('resize', handleResize, false);
  }, []);

  const handleResize = () => {
    if (window.innerWidth <= parseInt(themes.mainLight.mobileBreakpoint)) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const handleRowClick = (hero) => navigate(`/heroes/${hero.id}`, { state: { hero } });

  if (isMobile) {
    return (
      <>
        {heroes.map((hero) => (
          <MobileHeroesTableItem key={hero.id} hero={hero} handleRowClick={handleRowClick} />
        ))}
      </>
    );
  }

  return (
    <Table data-testid="heroes-table">
      <TableHead>
        <TableRow>
          <Header>Hero Name</Header>
          <Header>Power</Header>
          <Header>Rating</Header>
        </TableRow>
      </TableHead>
      <TableBody>
        {heroes.map((hero) => (
          <ClickableRow
            onClick={() => handleRowClick(hero)}
            key={`hero_${hero.id}`}
            data-testid="heroes-table-row"
          >
            <LeftAlignedDataCell data-testid="hero-name">{hero.name}</LeftAlignedDataCell>
            <LeftAlignedDataCell>{hero.power}</LeftAlignedDataCell>
            <DataCell>{renderStars(hero.id, hero.rating)}</DataCell>
          </ClickableRow>
        ))}
        <TableRow>
          <DataCell></DataCell>
          <DataCell></DataCell>
          <DataCell></DataCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

const MobileHeroesTableItem = ({ hero, handleRowClick }) => (
  <MobileTable data-testid="mobile-heroes-table">
    <TableBody>
      <ClickableRow onClick={() => handleRowClick(hero)}>
        <MobileHeader>Hero name</MobileHeader>
        <LeftAlignedDataCell data-testid="hero-name">{hero.name}</LeftAlignedDataCell>
      </ClickableRow>
      <ClickableRow onClick={() => handleRowClick(hero)}>
        <MobileHeader>Powers</MobileHeader>
        <LeftAlignedDataCell>{hero.power}</LeftAlignedDataCell>
      </ClickableRow>
      <ClickableRow onClick={() => handleRowClick(hero)}>
        <MobileHeader>Rate</MobileHeader>
        <LeftAlignedDataCell>{renderStars(hero.id, hero.rating)}</LeftAlignedDataCell>
      </ClickableRow>
    </TableBody>
  </MobileTable>
);

MobileHeroesTableItem.propTypes = {
  hero: PropTypes.object.isRequired,
  handleRowClick: PropTypes.func.isRequired
};

HeroesTable.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.object).isRequired
};
