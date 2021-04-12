import { GET_TOKEN, ERROR } from "./action_types";
import { baseUrl } from "../../config";
import { setLoading } from "./isLoading";
import { push } from "connected-react-router";

export const actionLogin = (loginData) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await fetch(`${baseUrl}auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(loginData),
      });
      const data = await res.json();
      const { access_token } = data;
      if (!access_token) {
        throw data;
      }
      localStorage.setItem("access_token", access_token);
      dispatch({
        type: GET_TOKEN,
        payload: {
          data: {
            data,
          },
        },
      });
      dispatch(setLoading(false));
      dispatch(push("/dashboard"));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};
