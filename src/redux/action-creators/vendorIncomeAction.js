export default function vendorIncomeAction(data) {
    return (dispatch) => {
        dispatch({
            type: "GET_VENDOR_INCOME",
            payload: data
        })
    }
}