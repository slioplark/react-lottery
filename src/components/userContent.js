import Loader from './loader';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import { Item } from './style';
import photo from '../static/photo.jpg';

const UserContent = () => {
  const userList = useSelector(state => state.userList);
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
      <Loader />
    );
  }
}

export default UserContent;