import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => (
  <section class="statistics">
    <h2 class="title">{title}</h2>

    <ul class="stat-list">
      {stats.map(stat => {
        return (
          <li key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="quantity">{stat.percentage}%</span>
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
