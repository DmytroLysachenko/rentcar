import { useDispatch } from 'react-redux';
import { perHour } from '../../helpers/perHour';
import { AdjInput } from '../AdjInput/AdjInput';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import s from './SearchBar.module.css';
import { clearFilter, setFilter } from '../../redux/filter/slice';
import { useEffect } from 'react';
import { fetchAllThunk } from '../../redux/catalog/operations';

const brands = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
  'Land',
];

export const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <form
      className={s.form}
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const filterValues = {
          brand: formData.get('brand'),
          perHour: formData.get('perHour'),
          min: formData.get('min'),
          max: formData.get('max'),
        };
        if (
          filterValues.brand ||
          filterValues.perHour ||
          filterValues.min ||
          filterValues.max
        ) {
          console.log(filterValues);
          dispatch(fetchAllThunk());
          dispatch(setFilter(filterValues));
        }
      }}
    >
      <Input
        title="Car brand"
        placeholder="Enter the text"
        options={brands}
        name="brand"
        width="224px"
      />
      <Input
        title="Price / 1 hour"
        placeholder="To $"
        options={perHour()}
        name="perHour"
        width="125px"
      />
      <AdjInput
        title="Сar mileage / km"
        width="320px"
      />
      <Button
        type="submit"
        width="136px"
      >
        Submit
      </Button>
    </form>
  );
};
