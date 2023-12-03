import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';
import PropTypes from 'prop-types';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <Button type="small" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
}

DeleteItem.propTypes = {
  pizzaId: PropTypes.number.isRequired,
};

export default DeleteItem;
