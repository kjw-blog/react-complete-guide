import Style from './UserInfo.module.css';

const UserInfo = (props) => {
  const deleteUserHandler = () => {
    props.deleteUser(props.user.id);
  };

  return (
    <li onClick={deleteUserHandler} className={Style.user}>
      {props.user.username} ({props.user.age} years old)
    </li>
  );
};

export default UserInfo;
