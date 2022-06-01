import PropTypes from 'prop-types';
import {
  ProfileContainer,
  ProfileInfo,
  Avatar,
  UserName,
  Stats,
  StatsItem,
  Label,
  Text,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileContainer>
      <ProfileInfo>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </ProfileInfo>
      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Text>{followers}</Text>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Text>{views}</Text>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Text>{likes}</Text>
        </StatsItem>
      </Stats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
