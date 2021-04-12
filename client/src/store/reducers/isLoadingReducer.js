import { IS_LOADING } from "../actions/action_types";

const defaultState = {
  isLoading: false,
};

const isLoadingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case IS_LOADING:
        const isLoading = action.payload;
        return { ...state, isLoading: isLoading };
    default:
      return state;
  }
};

export default isLoadingReducer;