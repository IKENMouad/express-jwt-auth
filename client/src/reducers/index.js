import { combineReducers } from "redux";
import AuthReducer from "./auth-reducer.js";

const reducers = combineReducers({
  auth: AuthReducer,
});

export default reducers;
