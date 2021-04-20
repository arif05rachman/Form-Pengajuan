import { GET_USERS, GET_USER, POST_USER, PUT_USER } from "../actions/action_types";

const defaultState = {
  users: [],
  user: {}
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USERS:
      const getUsers = action.payload.data;
      return { ...state, users: getUsers };
    case GET_USER:
      const getUser = action.payload.data;
      return { ...state, user: getUser };
    case PUT_USER:
      const putUser = action.payload.data;
      return { ...state, user: putUser };
    default:
      return state;
  }
};

export default userReducer;
