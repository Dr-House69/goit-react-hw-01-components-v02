import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  max-width: 320px;
  border: 3px solid rgb(144, 136, 177);
  border-radius: 6px;
  background-color: rgb(166, 231, 181);
`;

export const StatsTitle = styled.h2`
  text-align: center;
  font-size: 25px;
  font-weight: 700;
`;

export const StatsList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid rgb(144, 136, 177);
  border-radius: 2px;
  padding: 15px;
  width: calc(100% / 5);
`;

export const StatsInfo = styled.span``;
