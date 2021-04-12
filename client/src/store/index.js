import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";

import {
  errorReducer,
  isLoadingReducer,
  sidebarReducer,
  authReducer,
  userReducer,
} from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const history = createBrowserHistory({
  basename: "",
});
const middleware = [thunk, logger, routerMiddleware(history)];
const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    errorReducer,
    isLoadingReducer,
    sidebarReducer,
    authReducer,
    userReducer,
  });
const composeEnchancers = compose(applyMiddleware(...middleware));
const store = createStore(
  reducers(history),
  composeEnchancers
  // compose(applyMiddleware(routerMiddleware(history), thunk, logger))
);

export default store;
