import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';

function randomColor() {
  let color = `#${(Math.random().toString(16) + '000000')
    .substring(2, 8)
    .toUpperCase()}80`;
  return color;
}

export const Statistics = ({ title, stats }) => (
  <section class={css.statistics}>
    <h2 class={css.title}>{title}</h2>

    <ul class={css.statList}>
      {stats.map(stat => {
        return (
          <li key={stat.id} style={{ backgroundColor: randomColor() }}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.quantity}>{stat.percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
