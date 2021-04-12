import { GET_TOKEN } from "../actions/action_types";

const defaultState = {
  login: {},
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_TOKEN:
      const getLogin = action.payload.data;
      localStorage.setItem("access_token", getLogin.access_token);
      return { ...state, token: getLogin };
    default:
      return state;
  }
};

export default authReducer;
