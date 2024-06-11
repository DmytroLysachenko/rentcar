import { useSelector } from 'react-redux';
import { ListItem } from '../ListItem/ListItem';
import s from './List.module.css';
import { selectFavoriteCars } from '../../redux/catalog/selectors';

export const List = ({ cars, openModal }) => {
  const favorites = useSelector(selectFavoriteCars);
  return (
    <ul className={s.list}>
      {cars.map((car) => (
        <ListItem
          openModal={openModal}
          key={car.id}
          car={car}
          isLiked={favorites.includes(car.id)}
        />
      ))}
    </ul>
  );
};
