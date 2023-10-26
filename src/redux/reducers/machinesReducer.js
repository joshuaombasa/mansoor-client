export default function machinesReducer(state=[], action) {
    switch(action.type) {
        case "GET_ALL_MACHINES":
            return action.payload
        default:
            return state
    }
}