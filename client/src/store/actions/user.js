import {
  GET_USERS,
  GET_USER,
  POST_USER,
  PUT_USER,
  ERROR,
} from "./action_types";
import { baseUrl } from "../../config";
import { setLoading } from "./isLoading";
import { push } from "connected-react-router";

export const getUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await fetch(`${baseUrl}user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      const data = await res.json();
      dispatch({
        type: GET_USERS,
        payload: {
          data,
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

export const getUser = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await fetch(`${baseUrl}user/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      const data = await res.json();
      dispatch({
        type: GET_USER,
        payload: {
          data,
        },
      });
      dispatch(setLoading(false));
      dispatch(push(`/user/${id}`));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export const putUser = (id, user) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const res = await fetch(`${baseUrl}user/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: { user },
      });
      const data = await res.json();
      dispatch({
        type: PUT_USER,
        payload: {
          data,
        },
      });
      dispatch(setLoading(false));
      push(`/user`);
    } catch (error) {
      dispatch(setLoading(false));
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};
