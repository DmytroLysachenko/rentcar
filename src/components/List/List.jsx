import { ListItem } from '../ListItem/ListItem';

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
