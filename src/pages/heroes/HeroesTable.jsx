import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  margin: 0 2rem;
  border: 0.07rem solid ${(props) => props.theme.colors.border};
`;

const Header = styled.th`
  border: 0.07rem solid #979494;
  padding: 0.5rem 1rem;
  text-align: left;
`;

const DataCell = styled.td`
  border: 0.07rem solid #979494;
  padding: 0.5rem 1rem;
  min-width: 8rem;
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

export const HeroesTable = ({ heroes }) => {
  let navigate = useNavigate();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <Header>Name</Header>
          <Header>Power</Header>
          <Header>Rating</Header>
        </TableRow>
      </TableHead>
      <TableBody>
        {heroes.map((hero) => (
          <ClickableRow onClick={() => navigate(`/heroes/${hero.id}`)} key={`hero_${hero.id}`}>
            <DataCell>{hero.name}</DataCell>
            <DataCell>{hero.power}</DataCell>
            <DataCell>
              <StarsContainer>
                {[...Array(5)].map((_, i) => {
                  if (i + 1 <= hero.rating) {
                    return <FilledStar key={`hero_${hero.id}_star_${i}`} />;
                  } else {
                    return <UnfilledStar key={`hero_${hero.id}_star_${i}`} />;
                  }
                })}
              </StarsContainer>
            </DataCell>
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

HeroesTable.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.object).isRequired
};
