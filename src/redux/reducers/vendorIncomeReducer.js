export default function vendorIncomeReducer(state = [], action) {
    switch(action.type) {
        case "GET_VENDOR_INCOME":
            return action.payload
        default:
            return state
    }
}