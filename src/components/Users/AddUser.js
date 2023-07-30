import React, { useState } from 'react';
import Card from '../UI/Card';

import Style from './AddUser.module.css';

const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const usernameHandler = (e) => {
    setUsername(e.target.value.trim());
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();

    props.addUser({
      id: Math.random().toString(),
      username,
      age,
    });

    setUsername('');
    setAge('');
  };

  return (
    <Card>
      <form className={Style['add-form']} onSubmit={addUserHandler}>
        {/* class를 className으로 사용하는것과 같이 for는 예약어가 이미 있어서 사용할 수 없다 대신 htmlFor사용 */}
        <label htmlFor="username">Username</label>
        <input
          value={username}
          onChange={usernameHandler}
          id="username"
          type="text"
        />
        <label htmlFor="age">Age (Years)</label>
        <input value={age} onChange={ageHandler} id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
