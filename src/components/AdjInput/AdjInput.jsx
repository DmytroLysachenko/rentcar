import { numberDeFormat, numberFormat } from '../../helpers/numberFormat';
import s from './AdjInput.module.css';
import clsx from 'clsx';

import { getDefaultData } from '../../helpers/getDefaultData';
import { inputDataChecker } from '../../helpers/inputDataChecker';

export const AdjInput = ({ width, title }) => {
  const defaultValues = getDefaultData('min', 'max');

  return (
    <label
      style={{ width }}
      htmlFor={title}
      className={s.label}
    >
      {title}
      <div className={s.div}>
        <p className={clsx(s.placeholder, s.from)}>From </p>
        <input
          className={clsx(s.input, s.left)}
          type="text"
          name="min"
          id="min"
          maxLength="6"
          defaultValue={defaultValues.min}
          onChange={(event) => {
            inputDataChecker(event);
          }}
          onBlur={(event) => {
            event.target.value = numberFormat(event.target.value);
            window.localStorage.setItem(
              'min',
              JSON.stringify(event.target.value)
            );
          }}
          onFocus={(event) => {
            if (event.target.value) {
              event.target.value = numberDeFormat(event.target.value);
            }
          }}
        />

        <p className={clsx(s.placeholder, s.to)}>To </p>
        <input
          className={clsx(s.input, s.right)}
          type="text"
          name="max"
          id="max"
          maxLength="6"
          defaultValue={defaultValues.max}
          onChange={(event) => {
            inputDataChecker(event);
          }}
          onBlur={(event) => {
            event.target.value = numberFormat(event.target.value);
            window.localStorage.setItem(
              'max',
              JSON.stringify(event.target.value)
            );
          }}
          onFocus={(event) => {
            if (event.target.value) {
              event.target.value = numberDeFormat(event.target.value);
            }
          }}
        />
      </div>
    </label>
  );
};
