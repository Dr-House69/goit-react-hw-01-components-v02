import PropTypes from 'prop-types';
import { StatsInfo } from 'components/Statistics/Statistics.styled';

export const StatisticsItem = ({ label, percentage }) => (
  <>
    <StatsInfo>{label}</StatsInfo>
    <StatsInfo>{percentage}%</StatsInfo>
  </>
);

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
