import style from '../styles/Friends.module.css';
import PropTypes from 'prop-types';

function FriendListItem ({ avatar, isOnline, name }) {

  return (
    <li className={style.item}>
    <span className={isOnline?  style.statusIsOnline: style.statusIsOffline}></span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className={style.name}>{name}</p>
  </li>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
}

export default FriendListItem;
