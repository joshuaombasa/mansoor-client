const initialState = {
    user: {},
    isAuthenticated: false,
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                user: action.payload,
                isAuthenticated: true,
            }
        case "LOGOUT_USER":
            return {
                user: {},
                isAuthenticated: false,
            }
        default:
            return state
    }
}