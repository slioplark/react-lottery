import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeUserList = (data) => ({
  type: actionTypes.GET_USER_LIST,
  payload: data
});

export const getUserList = () => {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => dispatch(changeUserList(res.data)))
      .catch(err => console.log(err));
  }
}