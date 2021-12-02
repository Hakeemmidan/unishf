import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
`;

const Header = styled.th`
  border: 1px solid black;
`;

const DataCell = styled.td`
  border: 1px solid black;
`;

const TableHead = styled.thead``;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  height: 30px;
`;

export const AllHeroes = ({ heroes }) => {
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
          <TableRow key={`hero_${hero.id}`}>
            <DataCell>{hero.name}</DataCell>
            <DataCell>{hero.power}</DataCell>
            <DataCell>{hero.rating}</DataCell>
          </TableRow>
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

AllHeroes.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.object).isRequired
};
