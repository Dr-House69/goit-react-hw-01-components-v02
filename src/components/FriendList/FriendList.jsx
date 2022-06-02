import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem';
import {
  FriendsContainer,
  FriendItem,
} from 'components/FriendList/FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsContainer>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendItem key={id}>
          <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
        </FriendItem>
      ))}
    </FriendsContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
