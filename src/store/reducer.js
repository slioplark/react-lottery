import * as actionTypes from './actionTypes';

const defaultState = {
  user: {},
  userList: [],
  isModalOpen: false
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_LIST:
      return { ...state, userList: action.payload }
    default:
      return state;
  }
}

export default reducer;