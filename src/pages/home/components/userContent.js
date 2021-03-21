import UserLoader from './userLoader';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../store';
import { Item } from '../style';
import photo from '../../../static/photo.jpg';

const UserContent = () => {
  const userList = useSelector(state => state.home.userList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.getUserList());
  }, []);

  if (userList.length) {
    return (
      userList.map(item => {
        return (
          <Item key={item.id}>
            <img src={photo} alt="" />
            <span>{item.name}</span>
          </Item>
        );
      })
    );
  } else {
    return (
      <UserLoader />
    );
  }
}

export default UserContent;