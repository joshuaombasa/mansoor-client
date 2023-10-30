export function getallMachines(data) {
    return (dispatch) => {
    
        dispatch({
            type: "GET_ALL_MACHINES",
            payload: data
        })
    }
}