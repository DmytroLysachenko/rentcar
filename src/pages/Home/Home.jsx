import image1 from '/image1.png';
import image2 from '/image2.png';
import image3 from '/image3.png';
import s from './Home.module.css';
import clsx from 'clsx';
export const Home = () => {
  return (
    <div className={s.div}>
      <div className={s.heading_wrapper}>
        <h1 className={clsx(s.main_heading, s.heading)}>CarRent</h1>
        <p className={clsx(s.main_text, s.text)}>
          We are a premier rental service, offering a wide range of vehicles to
          ensure you experience exceptional service and convenience thorough the
          drive.
        </p>
        <q className={s.quote}>- "Helping you to find the best car to rent"</q>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <img
            width="40%"
            src={image1}
            alt="search car"
          />
          <div className={s.wrapper}>
            <h3 className={s.heading}>Find the car you need</h3>
            <p className={s.text}>
              Discover the ideal car for any occasion with our diverse range of
              rental options. Enjoy convenience, flexibility, and comfort by
              choosing the vehicle that best suits your needs.
            </p>
          </div>
        </li>
        <li className={s.item}>
          <div className={s.wrapper}>
            <h3 className={s.heading}>Check a vehicle&apos;s details</h3>
            <p className={s.text}>
              Meet with our expert car rental agent to swiftly complete all
              paperwork. Our team is dedicated to providing you with the best
              service to meet your needs.
            </p>
          </div>
          <img
            width="40%"
            src={image2}
            alt="prepare documents"
          />
        </li>
        <li className={s.item}>
          <img
            className={s.key_image}
            width="40%"
            src={image3}
            alt="complete deal"
          />
          <div className={s.wrapper}>
            <h3 className={s.heading}>Contact with the car dealer</h3>
            <p className={s.text}>
              Visit one of our many dealers, pick up the car and enjoy a smooth,
              efficient process. Drive away in a vehicle that&apos;s ready to
              go, ensuring a hassle-free start to your journey.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};
