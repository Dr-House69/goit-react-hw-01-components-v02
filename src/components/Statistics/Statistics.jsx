import PropTypes from 'prop-types';
import { StatisticsItem } from 'components/Statistics/StatisticsItem';
import { getRandomColor } from 'helpers/getRandomColor';
import {
  StatisticsContainer,
  StatsTitle,
  StatsList,
  StatsItem,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem
            key={id}
            style={{
              backgroundColor: getRandomColor(),
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
