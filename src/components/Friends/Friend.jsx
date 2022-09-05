import PropTypes from 'prop-types';
import css from 'components/Friends/Friend.module.css';

export const Friend = ({ avatar, name, isOnline }) => {
  const status = isOnline ? css.statusRed : css.statusGreen;
  return (
    <li className={css.item}>
      <span className={status}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

Friend.prototype = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
