import { GET_USERS, ERROR } from "./action_types";
import { baseUrl } from "../../config";
import { setLoading } from "./isLoading";
import { push } from "connected-react-router";

export const getUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await fetch(`${baseUrl}users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        }
      });
      const data = await res.json();
      dispatch({
        type: GET_USERS,
        payload: {
          data: {
            data,
          },
        },
      });
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};
