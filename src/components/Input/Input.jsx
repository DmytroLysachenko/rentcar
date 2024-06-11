import s from './Input.module.css';
import Select from 'react-select';

export const Input = ({ title, name, placeholder, options, width }) => {
  return (
    <label
      style={{ width }}
      htmlFor={title}
      className={s.label}
    >
      {title}
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={{ value: placeholder, label: placeholder }}
        isSearchable={true}
        name={name}
        options={options.map((brand) => ({ value: brand, label: brand }))}
      />
    </label>
  );
};
