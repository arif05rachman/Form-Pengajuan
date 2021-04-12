import { IS_LOADING } from "./action_types";

export const setLoading = (payload) => ({
  type: IS_LOADING,
  payload,
});
