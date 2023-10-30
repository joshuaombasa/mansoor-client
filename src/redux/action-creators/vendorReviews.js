export default function vendorReviewsAction(data) {
    return (dispatch) => {
        dispatch({
            type: "GET_VENDOR_REVIEWS",
            payload: data
        })
    }
}