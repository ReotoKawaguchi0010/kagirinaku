import {combineReducers} from "redux";

import {userReducer} from "./user";

export const LOGIN = 'login'
export const LOGOUT = 'logout'
export default combineReducers({userReducer})