import PropTypes from 'prop-types';
import { Friend } from 'components/Friends/Friend';
import css from 'components/Friends/Friend.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
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
