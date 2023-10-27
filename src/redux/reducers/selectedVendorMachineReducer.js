
export default function selectedVendorMachineReducer(state={}, action) {
    switch(action.type) {
        case "GET_SELECTED_VENDOR_MACHINE":
            return action.payload
        default:
            return state
    }
}