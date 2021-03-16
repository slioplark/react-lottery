import * as actionTypes from './actionTypes';

const defaultState = {
  user: {},
  userList: [],
  isModalOpen: false
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_LIST:
      return { ...state, userList: action.payload };
    case actionTypes.OPEN_MODAL:
      return { ...state, isModalOpen: action.payload };
    case actionTypes.CLOSE_MODAL:
      return { ...state, isModalOpen: action.payload };
    default:
      return state;
  }
}

export default reducer;