import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Pricing() {

    const selectedVendorEquipment = useOutletContext()

    return (
        <div className="pricing--container">
            <h3>Ksh {selectedVendorEquipment.price} /day</h3>
        </div>
    )
}