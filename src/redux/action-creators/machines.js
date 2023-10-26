export function getallMachines() {
    return (dispatch) => {
    fetch("http://localhost:3000/api/equipment")
         .then(res => res.json())
         .then(data => {
            dispatch({
                type: "GET_ALL_MACHINES",
                payload: data
            })
         })
    }
}