import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import { UsersWrapper, List, Item } from './style';

const Users = () => {
  const userList = useSelector(state => state.userList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.getUserList());
  }, [dispatch]);

  return (
    <UsersWrapper>
      <h2>參與抽獎名單</h2>
      <List>
        {
          userList.map(item => {
            return (
              <Item key={item.id}>{item.name}</Item>
            );
          })
        }
      </List>
    </UsersWrapper>
  );
}

export default Users;