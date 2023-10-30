export default function vendorTransactionsReducer(state = [], action) {
    switch(action.type) {
        case "GET_VENDOR_TRANSACTIONS":
            return action.payload
        default:
            return state
    }
}