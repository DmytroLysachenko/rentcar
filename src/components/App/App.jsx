import { AdjInput } from '../AdjInput/AdjInput';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { ListItem } from '../ListItem/ListItem';
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

export const App = () => {
  return (
    <div>
      <Input
        title="Car brand"
        placeholder="Enter the text"
        options={brands}
        width="224px"
      />
      <Input
        title="Price / 1 hour"
        placeholder="To $"
        options={perHour}
        width="125px"
      />
      <Button
        type="button"
        width="136px"
      >
        Submit
      </Button>
      <AdjInput />
      <ListItem
        car={{
          id: 9582,
          year: 2008,
          make: 'Buick',
          model: 'Enclave',
          type: 'SUV',
          img: 'https://ftp.goit.study/img/cars-test-task/buick_enclave.jpeg',
          description:
            'The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.',
          fuelConsumption: '10.5',
          engineSize: '3.6L V6',
          accessories: [
            'Leather seats',
            'Panoramic sunroof',
            'Premium audio system',
          ],
          functionalities: [
            'Power liftgate',
            'Remote start',
            'Blind-spot monitoring',
          ],
          rentalPrice: '$40',
          rentalCompany: 'Luxury Car Rentals',
          address: '123 Example Street, Kiev, Ukraine',
          rentalConditions:
            "Minimum age: 25\nValid driver's license\nSecurity deposit required",
          mileage: 5858,
        }}
      />
    </div>
  );
};
