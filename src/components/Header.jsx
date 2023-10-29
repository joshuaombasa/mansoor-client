import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoutUser from "../redux/action-creators/logoutUser";
import { useDispatch } from "react-redux";

export default function Header() {

    const dispatch = useDispatch()

    function handleLogout() {
        dispatch(logoutUser())
    }

    return (
        <header>
            <Link className="logo">mansoor</Link>
            <nav>
                <NavLink to="about">About</NavLink>
                <NavLink to="/equipment">Machinery</NavLink>
                <NavLink to="/vendor">Vendor</NavLink>
                <NavLink to="/login">Login</NavLink>
                <button 
                   onClick={handleLogout} 
                   className="logout--btn"
                >Logout</button>
            </nav>
        </header>
    )
}