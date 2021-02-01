import {initialState} from "./index";

export const contentReducer = (state=initialState, action) => {
    if (Boolean(action.state)) state = action.state
    switch (action.type) {
        case 'content_action':
            return {...state.contentReducer}
        default:
            console.log(state)
            return state.contentReducer

    }

}