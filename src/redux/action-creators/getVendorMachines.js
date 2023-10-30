export function getVendorMachines(data) {
    return (dispatch) => {
        dispatch({
            type: "GET_VENDOR_MACHINES",
            payload: data
        })
    }
}