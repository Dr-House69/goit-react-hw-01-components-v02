import styled from 'styled-components';

export const TableHistory = styled.table`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 340px;
  border: 3px solid rgb(144, 136, 177);
  border-radius: 6px;
  background-color: rgb(166, 231, 181);
`;

export const TableTitle = styled.th`
  height: 50px;
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  background-color: rgb(24, 209, 86);
`;

export const TableData = styled.td`
  padding: 10px;
  text-align: center;
  color: rgb(46, 44, 44);
`;

export const TableRow = styled.tr`
  background-color: rgb(166, 231, 181);
  :nth-of-type(2n + 1) {
    background-color: rgb(255, 255, 255);
  }
`;
