import {LOGIN, LOGOUT} from "./index";

const initialState = {
    login: false,
    user: {},
}

export const userReducer = (state=initialState, action) => {
    switch (action.type){
        case 'userInitial':
            if (Boolean(action.state)) state = action.state
            return action.data.login === 'true' ? {...state.userReducer, login: true, user: action.data.user}: {...state.userReducer, login: false}
        case LOGIN:
            return action.data.login === 'true' ? {...state.userReducer, login: true}: {...state.userReducer, login: false}
        case LOGOUT:
            return {...state.userReducer, login: false}
        default:
            return {...state.userReducer}
    }
}