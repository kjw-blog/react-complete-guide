import Style from './Button.module.css';

const Button = ({ type, text, className }) => {
  return (
    <button className={`${Style.button} ${className}`} type={type}>
      {text}
    </button>
  );
};

export default Button;
