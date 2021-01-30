


export const contentReducer = (state, action) => {
    if (Boolean(action.state)) state = action.state
    switch (action.type) {
        case 'content_action':
            console.log(state)
            return {...state}
        default:
            return {...state}
    }

}