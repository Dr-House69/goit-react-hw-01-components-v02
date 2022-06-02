import PropTypes from 'prop-types';
import { StatisticsItem } from 'components/Statistics/StatisticsItem';
import {
  StatisticsContainer,
  StatsTitle,
  StatsList,
  StatsItem,
} from 'components/Statistics/Statistics.styled';

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem
            key={id}
            style={{
              backgroundColor: randomColor(),
            }}
          >
            <StatisticsItem label={label} percentage={percentage} />
          </StatsItem>
        ))}
      </StatsList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
