import PropTypes from 'prop-types';
import style from '../styles/Friends.module.css';
import FriendListItem from './FriendListItem';

function Friends ({data}) {
  return (
    <ul className={style.friendList}>
      {data.map((friend) => {
        return <FriendListItem name={friend.name} isOnline={friend.isOnline} avatar={friend.avatar} key={friend.id} />
      })}
    </ul>
  )
}

Friends.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Friends;

