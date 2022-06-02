import PropTypes from 'prop-types';
import { TableData } from 'components/TransactionHistory/TransactionHistory.styled';

export const TransactionItem = ({ type, amount, currency }) => (
  <>
    <TableData>{type}</TableData>
    <TableData>{amount}</TableData>
    <TableData>{currency}</TableData>
  </>
);

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
