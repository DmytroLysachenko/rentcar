import { useDispatch } from 'react-redux';
import { Button } from '../Button/Button';
import s from './ListItem.module.css';
import { addCurrentCar } from '../../redux/catalog/slice';
export const ListItem = ({ car, openModal }) => {
  const [city, country] = car.address.split(',').slice(1);
  const description = [
    city,
    country,
    car.rentalCompany,
    car.type,
    car.id,
    car.functionalities[0],
  ];
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(addCurrentCar(car));
    openModal();
  };
  return (
    <li className={s.item}>
      <img
        className={s.img}
        src={car.img}
        alt={car.desc}
      />
      <div className={s.description_wrapper}>
        <h3 className={s.title}>
          {car.make} <span className={s.model}>{car.model}</span>, {car.year}
          <span className={s.price}>{car.rentalPrice}</span>
        </h3>
        <ul className={s.desc}>
          {description.map((item, i) => (
            <li
              key={car.id + item + i}
              className={s.desc_item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Button
        width="100%"
        onClick={onClick}
      >
        Learn more
      </Button>
    </li>
  );
};
