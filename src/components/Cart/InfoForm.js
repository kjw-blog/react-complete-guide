import { useState } from 'react';
import Input from '../UI/Input';
import Style from './InfoForm.module.css';

const InfoForm = () => {
  const [name, setName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);

  const nameIsValid = name.trim() !== '';
  const nameHasError = !nameIsValid && nameTouched;

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const nameBlurHandler = () => {
    setNameTouched(true);
  };

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
      <Input
        className={Style.input}
        label="주소"
        input={{ id: 'address', type: 'text' }}
      />
    </form>
  );
};

export default InfoForm;
