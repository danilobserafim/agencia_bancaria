
export default function loginReducer(state = {}, action) {
    if (action.type === 'login') {
        state = action.user
    }
    if (action.type === 'logout') {
        return [action.user]
    }
    
    return state;
}


