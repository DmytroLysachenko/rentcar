import { Link } from 'react-router-dom';
import s from './FavoritesEmpty.module.css';
import image from '/cars.png';
export const FavoritesEmpty = () => {
  return (
    <div className={s.div}>
      <h2 className={s.heading}>Still nothing here, lets change it!</h2>
      <Link
        className={s.link}
        to="/catalog"
      >
        Catalog page
      </Link>
      <img
        src={image}
        alt="cars"
      />
    </div>
  );
};
