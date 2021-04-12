import { GET_USERS } from "../actions/action_types";

const defaultState = {
  users: [],
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USERS:
      const getUsers = action.payload.data;
      return { ...state, token: getUsers };
    default:
      return state;
  }
};

export default userReducer;
