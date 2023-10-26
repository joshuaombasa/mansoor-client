import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="about--page">
            <div className="img--section"></div>
            <div className="about--page--container">
                <h1>About Mansoor Construction Equipment Rentals</h1>
                <p>Mansoor Construction Equipment Rentals is a leading provider of high-quality construction equipment for projects of all sizes.</p>
                <p>With a rich history spanning over three decades, we have established ourselves as a reliable partner for contractors and construction professionals seeking top-notch equipment for their ventures.</p>
                <div className="cta--area">
                    <p>We are committed to delivering excellence in every aspect of our service, from equipment selection to on-site assistance and technical support.</p>
                    <Link>Explore our equipment</Link>
                </div>
            </div>
        </div>
    )
}