import { useState } from 'react';

const BasicForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [firstNameTouched, setFirstNameTouched] = useState(false);

  const firstNameIsValid = firstName.trim() !== '';
  const firstNameHasError = !firstNameIsValid && firstNameTouched;

  let formValid = false;
  if (firstNameIsValid) formValid = true;

  const firstNameChangeHandler = (e) => {
    setFirstName(e.target.value);
  };

  const firstNameBlurHandler = (e) => {
    setFirstNameTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (firstNameHasError) return;

    setFirstName('');
    setFirstNameTouched(false);
  };

  const firstNameClasses = `form-control ${firstNameHasError && 'invalid'}`;

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
