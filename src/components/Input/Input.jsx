import { useSelector } from 'react-redux';
import s from './Input.module.css';
import Select from 'react-select';
import { selectFilter } from '../../redux/filter/selectors';

export const Input = ({ title, name, placeholder, options, width }) => {
  const filterValues = useSelector(selectFilter);
  return (
    <label
      style={{ width }}
      htmlFor={title}
      className={s.label}
    >
      {title}
      {filterValues[name] ? (
        <Select
          className="basic-single"
          classNamePrefix="select"
          placeholder={placeholder}
          isSearchable={true}
          defaultValue={{
            value: filterValues[name],
            label: filterValues[name],
          }}
          name={name}
          options={options.map((brand) => ({ value: brand, label: brand }))}
        />
      ) : (
        <Select
          className="basic-single"
          classNamePrefix="select"
          placeholder={placeholder}
          isSearchable={true}
          name={name}
          options={options.map((brand) => ({ value: brand, label: brand }))}
        />
      )}
    </label>
  );
};
