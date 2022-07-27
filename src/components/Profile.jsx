import PropTypes from 'prop-types';
import styles from '../styles/Profile.module.css'

function Profile ({username, tag, location, avatar, followers, views, likes}) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt={username}
          className={styles.avatar}
        />
        <p className={styles.textMein}>{username}</p>
        <p className={styles.text}>@{tag}</p>
        <p className={styles.text}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.statsElement}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li className={styles.statsElement}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li className={styles.statsElement}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  )
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired
}

export default Profile

