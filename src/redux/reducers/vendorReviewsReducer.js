export default function vendorReviewsReducer(state = [], action) {
    switch(action.type) {
        case "GET_VENDOR_REVIEWS":
            return action.payload
        default:
            return state
    }
}