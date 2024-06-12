import { useState } from 'react';
import { numberDeFormat, numberFormat } from '../../helpers/numberFormat';
import s from './AdjInput.module.css';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filter/selectors';

export const AdjInput = ({ width, title }) => {
  const filterValues = useSelector(selectFilter);
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
          defaultValue={filterValues.min}
          onChange={(event) => {
            if (isNaN(Number(event.target.value))) {
              event.target.value = event.target.value.slice(
                0,
                event.target.value.length - 2
              );
            }
          }}
          onBlur={(event) => {
            event.target.value = numberFormat(event.target.value);
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
          defaultValue={filterValues.max}
          onChange={(event) => {
            if (isNaN(Number(event.target.value))) {
              event.target.value = event.target.value.slice(
                0,
                event.target.value.length - 2
              );
            }
          }}
          onBlur={(event) => {
            event.target.value = numberFormat(event.target.value);
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
