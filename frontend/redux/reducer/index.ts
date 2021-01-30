import { combineReducers } from "redux";
import user from "./user";
import { UserState } from "../../types/state";

export type RootState = {
  user: UserState
}

export default combineReducers({
  user
})