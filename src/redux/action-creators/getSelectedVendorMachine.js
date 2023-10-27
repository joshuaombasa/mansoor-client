export default function getSelectedVendorMachine(id) {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/equipment/${id}`)
             .then(res => res.json())
             .then(data => {
                dispatch({
                    type: "GET_SELECTED_VENDOR_MACHINE",
                    payload: data
                })
             })
    }
}