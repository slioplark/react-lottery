import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeUserList = (data) => ({
  type: actionTypes.GET_USER_LIST,
  payload: data
});

export const getUser = (random) => ({
  type: actionTypes.GET_USER,
  payload: random
});

export const getUserList = () => {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => dispatch(changeUserList(res.data)))
      .catch(err => console.log(err));
  }
}

export const openModal = () => ({
  type: actionTypes.OPEN_MODAL,
  payload: true
});

export const closeModal = () => ({
  type: actionTypes.CLOSE_MODAL,
  payload: false
});