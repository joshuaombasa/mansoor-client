import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoutUser from "../redux/action-creators/logoutUser";
import { useDispatch } from "react-redux";

export default function Header() {

    const dispatch = useDispatch()

    function handleLogout() {
        dispatch(logoutUser())
    }

    const activeStyle = {
        textDecoration: "underline"
    }

    return (
        <header>
            <Link className="logo">mansoor</Link>
            <nav>
                <NavLink
                    style={({isActive}) => isActive ? activeStyle : null} 
                    to="about"
                >About</NavLink>
                <NavLink
                    style={({isActive}) => isActive ? activeStyle : null} 
                    to="/equipment"
                >Machinery</NavLink>
                <NavLink
                    style={({isActive}) => isActive ? activeStyle : null} 
                    to="/vendor"
                >Vendor</NavLink>
                <NavLink
                    style={({isActive}) => isActive ? activeStyle : null} 
                    to="/login"
                >Login</NavLink>
                <button 
                   onClick={handleLogout} 
                   className="logout--btn"
                >Logout</button>
            </nav>
        </header>
    )
}