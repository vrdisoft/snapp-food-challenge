import { combineReducers } from "redux";
import vendoreListReducer from "./vendoreList";

export default combineReducers({
  vendoreList: vendoreListReducer,
});
