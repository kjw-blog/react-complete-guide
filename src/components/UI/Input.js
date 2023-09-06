import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  const className = `${classes.input} ${
    props.className ? props.className : ''
  }`;

  return (
    <div className={className}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
