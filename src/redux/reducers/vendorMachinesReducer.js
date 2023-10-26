export default function vendorMachinesReducer(state=[], action) {
    switch(action.type) {
        case "GET_VENDOR_MACHINES":
            return action.payload
        default:
            return state
    }
}