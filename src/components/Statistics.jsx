import PropTypes from 'prop-types';
import style from '../styles/Statistic.module.css';


function Statistics({ title = 'Upload stats', stats, color = generateRandomColor() }) {
  return (
    <section className={style.statistics}>
      {title && (<h2 className={style.title}>Upload stats</h2>)}

      <ul className={style.statList}>
        {stats.map((stat) => {
          return <li className={style.item} key={stat.id} style={{ backgroundColor: color }}>
            <span className='label'>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}</span>
          </li>;
        })}
      </ul>
    </section>
  );
}

function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


export default Statistics;

Statistics.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired,
  title: PropTypes.string,
};
