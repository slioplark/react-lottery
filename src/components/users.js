
import UserContent from './userContent';
import { UsersWrapper, List } from './style';

const Users = () => {
  return (
    <UsersWrapper>
      <h2>參與抽獎名單</h2>
      <List>
        <UserContent />
      </List>
    </UsersWrapper>
  );
}

export default Users;