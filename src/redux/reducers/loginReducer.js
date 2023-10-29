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
        default:
            return state
    }
}