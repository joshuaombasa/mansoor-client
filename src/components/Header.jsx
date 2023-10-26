import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link className="logo">mansoor</Link>
            <nav>
                <NavLink to="about">About</NavLink>
                <NavLink to="/equipment">Machinery</NavLink>
                <NavLink to="/vendor">Vendor</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>
        </header>
    )
}