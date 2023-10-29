export default function loginUser(data) {
    return (dispatch) => {
        dispatch({
            type: "LOGIN_USER",
            payload: data
        })
    }
}

// export default function loginUser(formData) {
//     return (dispatch) => {
//         fetch(`http://localhost:3000/api/login`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//         })
//         .then(res => {
//             if (!res.ok) {
//                 return res.json().then(data => {
//                     throw {
//                         message : data.message
//                     };
//                 });
//             }
//             return res.json();
//         })
//         .then(data => {
//             dispatch({
//                 type: "LOGIN_USER_SUCCESS",
//                 payload: {data: data, isLoggedIn: true}
//             });
//         })
//         .catch(error => {
//             // Handle any errors during the fetch request
//             dispatch({
//                 type: "LOGIN_USER_FAILURE",
//                 payload: { data: error, isLoggedIn: false}
//             });
//         });
//     };
// }
