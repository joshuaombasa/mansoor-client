import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequired() {

    const isLoggedIn = useSelector(state => state.loggedInData.isAuthenticated)
    console.log(isLoggedIn)

    // const navigate = useNavigate()

    if (!isLoggedIn) {
         return <Navigate to="/login" state={{message: "Please login first"}}/>
    }
    
    return (
        <>
          <Outlet/>
        </>
    )
}