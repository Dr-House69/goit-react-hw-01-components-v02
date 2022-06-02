import PropTypes from 'prop-types';
import { TransactionItem } from 'components/TransactionHistory/TransactionItem';
import {
  TableHistory,
  TableTitle,
  TableRow,
} from 'components/TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableHistory>
      <thead>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TransactionItem type={type} amount={amount} currency={currency} />
          </TableRow>
        ))}
      </tbody>
    </TableHistory>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
