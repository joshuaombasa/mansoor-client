import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function AuthRequired() {

    const isLoggedIn = useSelector(state => state.loggedInData.isAuthenticated)
    const location = useLocation()
    const redirectTo = location.pathname

    // const navigate = useNavigate()

    if (!isLoggedIn) {
         return <Navigate to={`/login?redirectTo=${redirectTo}`} state={{message: "Please login first"}}/>
    }
    
    return (
        <>
          <Outlet/>
        </>
    )
}