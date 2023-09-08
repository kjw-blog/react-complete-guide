import Input from '../UI/Input';
import Style from './InfoForm.module.css';
import useInput from '../hooks/useInput';
import React, { useEffect } from 'react';

const nameValidate = (value) => value.trim() !== '';
const emailValidate = (value) => value.includes('@');

const InfoForm = ({ setUser, formValidate }) => {
  const {
    value: name,
    isValid: nameIsValid,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    hasError: nameHasError,
  } = useInput(nameValidate);

  const {
    value: email,
    isValid: emailIsValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    hasError: emailHasError,
  } = useInput(emailValidate);

  const formIsValid = nameIsValid && emailIsValid;

  useEffect(() => {
    setUser({ name, email });
  }, [name, email, setUser]);
  useEffect(() => {
    formValidate(formIsValid);
  }, [formIsValid, formValidate]);

  return (
    <div className={Style.form}>
      <span>User Info</span>
      <form>
        <div className={nameHasError ? Style.hasError : ''}>
          <Input
            label="이름"
            input={{
              id: 'name',
              type: 'text',
              value: name,
              onChange: nameChangeHandler,
              onBlur: nameBlurHandler,
            }}
          />
          {nameHasError && <p>이름을 입력해 주세요.</p>}
        </div>
        <div className={emailHasError ? Style.hasError : ''}>
          <Input
            className={Style.input}
            label="주소"
            input={{
              id: 'address',
              type: 'text',
              value: email,
              onChange: emailChangeHandler,
              onBlur: emailBlurHandler,
            }}
          />
          {emailHasError && <p>올바른 이메일 양식을 입력해 주세요.</p>}
        </div>
      </form>
    </div>
  );
};

export default React.memo(InfoForm);
