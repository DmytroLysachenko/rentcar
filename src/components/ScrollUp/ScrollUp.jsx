import { useState } from 'react';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import s from './ScrollUp.module.css';
import { AnimatePresence, motion } from 'framer-motion';
export const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ transform: 'translateY(100%)', opacity: 0 }}
          animate={{ transform: 'translateY(0)', opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ transform: 'translateY(100%)', opacity: 0 }}
          type="button"
          className={s.btn}
        >
          <FaRegArrowAltCircleUp
            className={s.svg}
            onClick={scrollToTop}
          />
          <span className={s.text}>Up!</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
