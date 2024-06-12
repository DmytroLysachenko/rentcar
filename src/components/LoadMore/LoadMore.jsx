import { useDispatch } from 'react-redux';
import s from './LoadMore.module.css';
import { fetchAllThunk } from '../../redux/catalog/operations';

export const LoadMore = () => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className={s.button}
      onClick={() => dispatch(fetchAllThunk())}
    >
      Load more
    </button>
  );
};
