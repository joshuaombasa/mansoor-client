import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="layout--container">
            <Header/>
            <div className="outlet--space">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}