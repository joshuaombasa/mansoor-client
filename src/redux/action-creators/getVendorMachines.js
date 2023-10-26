export function getVendorMachines() {
    return (dispatch) => {
    fetch("http://localhost:3000/api/vendor/equipment")
         .then(res => res.json())
         .then(data => {
            dispatch({
                type: "GET_VENDOR_MACHINES",
                payload: data
            })
         })
    }
}