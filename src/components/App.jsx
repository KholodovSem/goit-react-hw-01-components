import Profile from './Profile';
import user from '../data/user.json';
import stats from '../data/data.json';
import Statistics from './Statistics';
import Friends from './Friends';
import friendsData from '../data/friends.json';
import TransactionHistory from './TransactionHistory';
import transactionData from '../data/transactions.json'

export const App = () => {
  return (
    <div>
      <Profile followers={user.stats.followers}
               views={user.stats.views}
               likes={user.stats.likes}
               location={user.location}
               tag={user.tag}
               avatar={user.avatar}
               username={user.username} />
      <Statistics stats={stats} color="blue"/>
      <Friends data={friendsData} />
      <TransactionHistory data={transactionData} />
    </div>
  );
};
