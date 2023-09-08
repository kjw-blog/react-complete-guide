import { useState } from 'react';

const useInput = (validate) => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);

  const isValid = validate(value);
  const hasError = !isValid && touched;

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setTouched(true);
  };

  return {
    value,
    touched,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
