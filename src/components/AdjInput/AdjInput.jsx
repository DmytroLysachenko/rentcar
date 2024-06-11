import s from './AdjInput.module.css';
import clsx from 'clsx';

export const AdjInput = ({ width, title }) => {
  return (
    <label
      style={{ width }}
      htmlFor={title}
      className={s.label}
    >
      {title}
      <div className={s.div}>
        <input
          className={clsx(s.input, s.left)}
          type="number"
          placeholder="From"
          min="0"
          max="1000"
        />
        <input
          className={clsx(s.input, s.right)}
          type="number"
          placeholder="To"
          min="0"
          max="1000"
        />
      </div>
    </label>
  );
};
