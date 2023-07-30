import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import Warning from './components/Warning/Warning';

function App() {
  const [userList, setUserList] = useState([]);
  const [warning, setWarning] = useState('');

  const warningHandler = (text) => {
    setWarning(text);
  };

  const addUserHandler = (user) => [
    setUserList((prev) => {
      const updateList = [...prev];
      updateList.unshift(user);
      return updateList;
    }),
  ];

  return (
    <>
      <div>
        <AddUser addUser={addUserHandler} onWarning={warningHandler} />
        {userList.length > 0 && <UserList userList={userList} />}
      </div>
      {warning && <Warning text={warning} />}
    </>
  );
}

export default App;
