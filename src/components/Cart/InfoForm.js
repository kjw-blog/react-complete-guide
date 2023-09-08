import Input from '../UI/Input';
import Style from './InfoForm.module.css';
import useInput from '../hooks/useInput';

const nameValidate = (value) => value.trim() !== '';
const emailValidate = (value) => value.includes('@');

const InfoForm = () => {
  const {
    value: name,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    hasError: nameHasError,
  } = useInput(nameValidate);
  const {
    value: email,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    hasError: emailHasError,
  } = useInput(emailValidate);

  return (
    <form className={Style.form}>
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
  );
};

export default InfoForm;
