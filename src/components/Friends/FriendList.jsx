import PropTypes from 'prop-types';
import { Friend } from 'components/Friends/Friend';

export const FriendList = ({ friends }) => {
  return (
    <ul class="friends-list">
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <Friend id={id} avatar={avatar} name={name} isOnline={isOnline} />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
