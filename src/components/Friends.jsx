import PropTypes from 'prop-types';
import style from '../styles/Friends.module.css';

function Friends ({data}) {
  return (
    <ul className={style.friendList}>
      {data.map((friend) => {
        return <li className={style.item} key={friend.id}>
          <span className={friend.isOnline?  style.statusIsOnline: style.statusIsOffline}></span>
          <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
          <p className={style.name}>{friend.name}</p>
        </li>
      })}
    </ul>
  )
}

Friends.propTypes = {
  avatar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
}

export default Friends;
