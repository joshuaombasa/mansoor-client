export default function selectedMachineReducer(state = null, action) {
    switch(action.type) {
        case "GET_SELECTED_MACHINE":
            return action.payload
        default:
            return state
    }
}