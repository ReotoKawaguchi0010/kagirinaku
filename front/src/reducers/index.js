import {combineReducers} from "redux";

import {userReducer} from "./user_reducer";
import {contentReducer} from "./content_reducer";

export const LOGIN = 'login'
export const LOGOUT = 'logout'
export const defaultUserReducer = {
    login: false,
    user: {
        username: '',
        last_name: '',
        first_name: '',
        email: '',
    },
}
export default combineReducers({userReducer, contentReducer})