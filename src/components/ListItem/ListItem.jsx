import { Button } from '../Button/Button';
import s from './ListItem.module.css';
export const ListItem = ({ car }) => {
  const [city, country] = car.address.split(',').slice(1);
  const description = [
    city,
    country,
    car.rentalCompany,
    car.type,
    car.id,
    car.functionalities[0],
  ];
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
        <p className={s.desc}>
          {description.map((item, i) => (
            <span
              key={car.id * i}
              className={s.desc_item}
            >
              {item}
            </span>
          ))}
        </p>
      </div>
      <Button width="100%">Learn more</Button>
    </li>
  );
};
