import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Photos() {
    const selectedVendorEquipment = useOutletContext()

    return (
        <div className="photos--container">
            <img src={selectedVendorEquipment.imageUrl} alt="" />
        </div>
    )
}