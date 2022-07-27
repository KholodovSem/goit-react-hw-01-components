import PropTypes from 'prop-types';
import style from '../styles/TransactionHistory.module.css';

function TransactionHistory ({data}) {
 return (
   <table className={style.transactionHistory}>
    <thead>
    <tr>
      <th className={style.category}>Type</th>
      <th className={style.category}>Amount</th>
      <th className={style.category}>Currency</th>
    </tr>
    </thead>

    <tbody>
    {data.map((item) => {
     return <tr key={item.id}>
        <td className={style.item}>{item.type}</td>
        <td className={style.item}>{item.amount}</td>
        <td className={style.item}>{item.currency}</td>
      </tr>
    })}
    </tbody>
  </table>
 )
}

TransactionHistory.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TransactionHistory;
