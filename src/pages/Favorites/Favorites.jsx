import { useEffect } from 'react';
import { List } from '../../components/List/List';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllThunk } from '../../redux/catalog/operations';
import {
  selectCatalog,
  selectFavoriteCars,
} from '../../redux/catalog/selectors';

export const Favorites = () => {
  const dispatch = useDispatch();
  const catalog = useSelector(selectCatalog);
  useEffect(() => {
    if (catalog.length === 12) {
      dispatch(fetchAllThunk());
    }
  }, []);
  const cars = useSelector(selectFavoriteCars);
  return (
    <div>
      <h2>Your favorite offers:</h2>
      <List cars={cars} />
    </div>
  );
};
