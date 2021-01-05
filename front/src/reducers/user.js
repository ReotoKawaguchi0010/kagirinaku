import {LOGIN} from "./index";

const initialState = {
    login: false,
    user: {},
}

export const userReducer = (state=initialState, action) => {
    switch (action.type){
        case 'userInitial':
            return {...state}
        case LOGIN:
            return {...state, login: action.data.login}
        default:
            return {...state}
    }
}