import classes from './Input.module.css';

const Input = (props) => {
  const changeHandler = (event) => {
    props.dispatch({ type: 'USER_INPUT', val: event.target.value });
  };

  const validateHandler = () => {
    props.dispatch({ type: 'INPUT_BLUR' });
  };

  return (
    <div
      className={`${classes.control} ${
        props.state.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.type}>{props.label}</label>
      <input
        type={props.type}
        id={props.type}
        value={props.state.value}
        onChange={changeHandler}
        onBlur={validateHandler}
      />
    </div>
  );
};

export default Input;
