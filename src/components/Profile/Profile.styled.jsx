import styled from 'styled-components';

export const ProfileContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 320px;
  border: 3px solid rgb(144, 136, 177);
  border-radius: 6px;
  background-color: rgb(166, 231, 181);
`;

export const ProfileInfo = styled.div`
  font-size: 15px;
  text-align: center;
`;

export const Avatar = styled.img`
  margin: 10px 0 10px 0;
  max-width: 200px;
  border: 2px solid rgb(144, 136, 177);
  border-radius: 50%;
  background-color: rgb(226, 209, 209);
`;

export const UserName = styled.p`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const Stats = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 80px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc((100% - 4 * 15px) / 2);
  border-top: 1px solid rgb(139, 126, 196);
  border-right: 1px solid rgb(139, 126, 196);
`;

export const Label = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #000000;
`;

export const About = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  color: rgb(47, 45, 45);
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  color: rgb(47, 45, 45);
`;
