import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function VendorLayout() {
    const activeStyle = {
        textDecoration: "underline"
    }

    return (
        <div className="vendor--layout--container">
            <nav>
                <NavLink
                     style={({isActive}) => isActive ? activeStyle : null} 
                     to="."
                     end
                >Dashboard</NavLink>
                <NavLink
                     style={({isActive}) => isActive ? activeStyle : null} 
                     to="income"
                >Income</NavLink>
                <NavLink
                     style={({isActive}) => isActive ? activeStyle : null} 
                     to="equipment"
                >Machinery</NavLink>
                <NavLink
                     style={({isActive}) => isActive ? activeStyle : null} 
                     to="reviews"
                >Reviews</NavLink>
            </nav>
            <Outlet/>
        </div>
    )
}