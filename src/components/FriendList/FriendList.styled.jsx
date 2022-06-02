import styled from 'styled-components';

export const FriendsContainer = styled.ul`
  text-align: center;
  margin-bottom: 20px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 320px;
  height: 100px;
  background-color: rgb(166, 231, 181);
  padding-left: 10px;
  border: 3px solid rgb(144, 136, 177);
  border-radius: 6px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Avatar = styled.img``;

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-left: 20px;
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: ${span =>
    span.isOnline ? 'rgb(13, 92, 13)' : 'rgb(179, 33, 11)'};
`;
