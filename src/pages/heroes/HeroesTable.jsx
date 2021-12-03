import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  margin: 0 2rem;
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
          <Header>Hero Name</Header>
          <Header>Power(s)</Header>
          <Header>Rating</Header>
        </TableRow>
      </TableHead>
      <TableBody>
        {heroes.map((hero) => (
          <ClickableRow onClick={() => navigate(`/heroes/${hero.id}`)} key={`hero_${hero.id}`}>
            <LeftAlignedDataCell>{hero.name}</LeftAlignedDataCell>
            <LeftAlignedDataCell>{hero.power}</LeftAlignedDataCell>
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
