import { useEffect } from 'react';
import { List } from '../../components/List/List';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllThunk } from '../../redux/catalog/operations';
import {
  selectCatalog,
  selectFavoriteCars,
} from '../../redux/catalog/selectors';
import { limitForFirstPage } from '../../helpers/mockAPI';
import s from './Favorites.module.css';

export const Favorites = () => {
  const dispatch = useDispatch();
  const catalog = useSelector(selectCatalog);
  useEffect(() => {
    if (catalog.length <= limitForFirstPage) {
      dispatch(fetchAllThunk());
    }
  }, []);
  const cars = useSelector(selectFavoriteCars);
  return (
    <div>
      <h2 className={s.heading}>Your favorite offers: </h2>
      <List cars={cars} />
    </div>
  );
};
