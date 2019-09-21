import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

// array of middleware
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  // using 'compose' to implement redux devTools
  compose(
    // to enable Redux Thunk, use applyMiddleware():
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
