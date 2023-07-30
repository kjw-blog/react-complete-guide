import Style from './UserInfo.module.css';

const UserInfo = (props) => {
  return (
    <li className={Style.user}>
      {props.user.username} ({props.user.age} years old)
    </li>
  );
};

export default UserInfo;
