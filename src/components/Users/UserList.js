import Card from '../UI/Card';
import UserInfo from './UserInfo';
import Style from './UserList.module.css';

const UserList = (props) => {
  return (
    <Card className={Style['list-wrap']}>
      <ul className={Style.list}>
        {props.userList.map((user) => (
          <UserInfo deleteUser={props.deleteUser} key={user.id} user={user} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
