import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Details() {

    const selectedVendorEquipment = useOutletContext()

    return (
        <div className="details--container">
            <p>Name <br /><span>{selectedVendorEquipment.name}</span></p>
            <p>Category <br /><span>{selectedVendorEquipment.name}</span></p>
            <p>Description <br /><span>{selectedVendorEquipment.description}</span></p>
        </div>
    )
}