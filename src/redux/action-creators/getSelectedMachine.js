export default function getSelectedMachine(data) {
    return (dispatch) => {
        dispatch({
            type: "GET_SELECTED_MACHINE",
            payload: data
        })
    }
}