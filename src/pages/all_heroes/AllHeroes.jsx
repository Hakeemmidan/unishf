import React from 'react';
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

const TableRow = styled.tr``;

export const AllHeroes = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <Header>Company</Header>
          <Header>Contact</Header>
          <Header>Country</Header>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <DataCell>Alfreds Futterkiste</DataCell>
          <DataCell>Maria Anders</DataCell>
          <DataCell>Germany</DataCell>
        </TableRow>
        <TableRow>
          <DataCell>Centro comercial Moctezuma</DataCell>
          <DataCell>Francisco Chang</DataCell>
          <DataCell>Mexico</DataCell>
        </TableRow>
        <TableRow>
          <DataCell>Ernst Handel</DataCell>
          <DataCell>Roland Mendel</DataCell>
          <DataCell>Austria</DataCell>
        </TableRow>
        <TableRow>
          <DataCell>Island Trading</DataCell>
          <DataCell>Helen Bennett</DataCell>
          <DataCell>UK</DataCell>
        </TableRow>
        <TableRow>
          <DataCell>Laughing Bacchus Winecellars</DataCell>
          <DataCell>Yoshi Tannamuri</DataCell>
          <DataCell>Canada</DataCell>
        </TableRow>
        <TableRow>
          <DataCell>Magazzini Alimentari Riuniti</DataCell>
          <DataCell>Giovanni Rovelli</DataCell>
          <DataCell>Italy</DataCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
