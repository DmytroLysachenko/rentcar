import { ListItem } from '../ListItem/ListItem';
import s from './List.module.css';
export const List = ({ cars }) => {
  return (
    <ul className={s.list}>
      {cars.map((car) => (
        <ListItem
          key={car.id}
          car={car}
        />
      ))}
    </ul>
  );
};
