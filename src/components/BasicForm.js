import { useState } from 'react';
import useInput from '../hooks/useInput';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    reset: resetFirstName,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    reset: resetLastName,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    reset: resetEmail,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail);

  let formValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) formValid = true;

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formValid) return;

    alert('짝짝짝');

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = `form-control ${firstNameHasError ? 'invalid' : ''}`;
  const lastNameClasses = `form-control ${lastNameHasError ? 'invalid' : ''}`;
  const emailClasses = `form-control ${emailHasError ? 'invalid' : ''}`;

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
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">성을 입력해 주세요.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">올바른 이메일을 입력해 주세요.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
