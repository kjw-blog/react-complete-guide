import { useState } from 'react';
import useInput from '../hooks/useInput';

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    reset: resetFirstName,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
  } = useInput({
    validate: (value) => value.trim() !== '',
  });

  let formValid = false;
  if (firstNameIsValid) formValid = true;

  const submitHandler = (e) => {
    e.preventDefault();

    if (firstNameHasError) return;

    resetFirstName();
  };

  const firstNameClasses = `form-control ${firstNameHasError ? 'invalid' : ''}`;

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">이름을 입력해 주세요.</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
