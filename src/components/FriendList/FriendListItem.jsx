import PropTypes from 'prop-types';
import {
  Avatar,
  FriendName,
  FriendStatus,
} from 'components/FriendList/FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <FriendStatus isOnline={isOnline} />
    <Avatar src={avatar} alt="User avatar" width="48" />
    <FriendName>{name}</FriendName>
  </>
);

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
