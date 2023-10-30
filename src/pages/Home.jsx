import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div className="home--page">
            <div className="home--page--container">
                <h1>Welcome to Mansoor Construction Equipment Rentals.Your Trusted Partner for Reliable Construction Equipment Solutions</h1>
                <p>At Mansoor, we understand the critical role that top-quality equipment plays in the success of your construction projects. With our wide range of meticulously maintained construction machinery and tools, we are committed to providing you with the resources you need to get the job done efficiently and effectively.</p>
                <Link to="/equipment">Checkout Our Equipment</Link>
            </div>
        </div>
    )
}