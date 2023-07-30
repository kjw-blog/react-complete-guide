import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import Warning from './components/Warning/Warning';

function App() {
  const [userList, setUserList] = useState([]);

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
        <AddUser addUser={addUserHandler} />
        {userList.length > 0 && <UserList userList={userList} />}
      </div>
      <Warning />
    </>
  );
}

export default App;
