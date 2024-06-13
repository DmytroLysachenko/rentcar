import image1 from '/image1.png';
import image2 from '/image2.png';
import image3 from '/image3.png';
import s from './Home.module.css';
import clsx from 'clsx';
import { motion } from 'framer-motion';
export const Home = () => {
  return (
    <div className={s.div}>
      <div className={s.heading_wrapper}>
        <h1 className={clsx(s.main_heading, s.heading)}>CarRent</h1>
        <p className={clsx(s.main_text, s.text)}>
          We are a premier rental service, offering a wide range of vehicles to
          ensure You experience exceptional service and convenience thorough the
          drive.
        </p>
        <q className={s.quote}>
          - &quot;Helping You to find the best car to rent&quot;
        </q>
      </div>
      <h2 className={s.sub_heading}>
        Here You can find three <span className={s.accent}>simple</span> steps
        our web-site will help You to perform:
      </h2>
      <ul className={s.list}>
        <motion.li
          className={s.item}
          initial={{ opacity: 0, transform: 'translateX(-50%)' }}
          whileInView={{ opacity: 1, transform: 'translateX(0)' }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            width="40%"
            src={image1}
            alt="search car"
          />
          <div className={s.wrapper}>
            <h3 className={s.heading}>
              <span className={s.accent}>Find </span>the car You need
            </h3>
            <p className={s.text}>
              Finding the perfect rental car has never been easier with our
              intuitive catalog search. Our advanced filters allow You to narrow
              down options by car type, mileage, and price range. Within
              seconds, You&apos;ll be presented with a tailored list of
              available vehicles that meet Your criteria.
            </p>
          </div>
        </motion.li>
        <motion.li
          className={s.item}
          initial={{ opacity: 0, transform: 'translateX(50%)' }}
          whileInView={{ opacity: 1, transform: 'translateX(0)' }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className={s.wrapper}>
            <h3 className={s.heading}>
              <span className={s.accent}>Check</span> a vehicle&apos;s details
            </h3>
            <p className={s.text}>
              Simply browse through our extensive online catalog, select the car
              that catches Your eye, and click on it for a comprehensive
              overview. You&apos;ll find all the information You need, including
              features, specifications, rental rates, and availability. Our
              user-friendly interface ensures You can effortlessly compare
              different models to make the best choice for Your needs.
            </p>
          </div>
          <img
            width="40%"
            src={image2}
            alt="prepare documents"
          />
        </motion.li>
        <motion.li
          className={s.item}
          initial={{ opacity: 0, transform: 'translateX(-50%)' }}
          whileInView={{ opacity: 1, transform: 'translateX(0)' }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            className={s.key_image}
            width="40%"
            src={image3}
            alt="complete deal"
          />
          <div className={s.wrapper}>
            <h3 className={s.heading}>
              <span className={s.accent}>Contact</span> with the car dealer
            </h3>
            <p className={s.text}>
              Once You&apos;ve found the perfect car, just click on the
              &quot;Rental Car&quot; button on the vehicle&apos;s page. Our
              responsive team is ready to assist with any inquiries, ensuring
              You have all the information You need to make Your rental
              experience seamless and enjoyable. Getting in touch has never been
              more convenient!
            </p>
          </div>
        </motion.li>
      </ul>
      <h2 className={s.bottom_heading}>
        Hopefully our web-site will keep You{' '}
        <span className={s.accent}>satisfied</span> with rental experience!
      </h2>
      <h3 className={s.bottom_sub_heading}>
        <span className={s.accent}>Thank You</span> for choosing CarRent!
      </h3>
    </div>
  );
};
