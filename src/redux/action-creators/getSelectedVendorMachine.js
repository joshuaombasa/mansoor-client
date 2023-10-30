export default function getSelectedVendorMachine(data) {
    return (dispatch) => {
        dispatch({
            type: "GET_SELECTED_VENDOR_MACHINE",
            payload: data
        })
    }
}