export default function vendorTransactionsAction(data) {
    return (dispatch) => {
        dispatch({
            type: "GET_VENDOR_TRANSACTIONS",
            payload: data
        })
    }
}