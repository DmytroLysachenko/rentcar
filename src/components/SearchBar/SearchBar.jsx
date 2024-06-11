import { AdjInput } from '../AdjInput/AdjInput';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import s from './SearchBar.module.css';

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

const perHour = ['30', '40', '50', '60', '70', '80', '90', '100'];

export const SearchBar = () => {
  return (
    <form className={s.form}>
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
        options={perHour}
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
