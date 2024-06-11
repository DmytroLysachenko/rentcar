import { ListItem } from '../ListItem/ListItem';
import s from './List.module.css';
export const List = ({ cars, openModal }) => {
  return (
    <ul className={s.list}>
      {cars.map((car) => (
        <ListItem
          openModal={openModal}
          key={car.id}
          car={car}
        />
      ))}
    </ul>
  );
};
