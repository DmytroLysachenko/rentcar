import s from './Button.module.css';
export const Button = ({ type, children, width }) => {
  return (
    <button
      style={{ width }}
      className={s.button}
      type={type}
    >
      {children}
    </button>
  );
};
