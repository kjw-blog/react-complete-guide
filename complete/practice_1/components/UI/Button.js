import Style from './Button.module.css';

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${Style.button} ${props.className}`}
      type={props.type}
    >
      {props.text}
    </button>
  );
};

export default Button;
