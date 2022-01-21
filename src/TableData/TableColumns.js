import React from 'react';
import {Thead, Tr, Th, } from 'react-super-responsive-table';

export default function TableColumns({columns}) {

  return (
      <Thead>
          <Tr>
            <Th>Name</Th>
            {columns && columns.map(name => (
              <Th>{name}</Th>
            ))}
          </Tr>
      </Thead>
  );
}