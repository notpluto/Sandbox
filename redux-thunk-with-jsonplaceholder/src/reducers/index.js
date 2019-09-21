import { combineReducers } from "redux";
import postReducer from "./postReducer";

export default combineReducers({
  // object with all the reducers
  posts: postReducer
});
