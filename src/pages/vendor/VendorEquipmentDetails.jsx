import React, { useEffect, useState } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getSelectedVendorMachine from "../../redux/action-creators/getSelectedVendorMachine";
export default function VendorEquipmentDetails() {

    const [loading, setLoading] = useState(true)
    const params = useParams()

    const selectedVendorEquipment = useSelector(state => state.selectedVendorEquipment)
    const dispatch = useDispatch()

    useEffect(() => {
        setLoading(true)
        dispatch(getSelectedVendorMachine(params.id))
        setLoading(false)
    }, [])

    if (loading) {
        return (
            <div className="vendor--equipment--details--page">
                <h1>Loading...</h1>
            </div>
        )
    }

    console.log(selectedVendorEquipment)


    return (
        <div className="vendor-page-width vendor--equipment--details--page">
            <div className="vendor--equipment--details--page--container">
                <div className="top--section">
                    <img src={selectedVendorEquipment.imageUrl} alt="" />
                    <div className="info--section">
                        <h3>{selectedVendorEquipment.name}</h3>
                        <span>Ksh {selectedVendorEquipment.price}/day</span>
                    </div>
                </div>
                <div className="bottom--section">
                    <nav>
                        <NavLink to=".">Details</NavLink>
                        <NavLink to="pricing">Pricing</NavLink>
                        <NavLink to="photos">Photos</NavLink>
                    </nav>
                    <Outlet context={selectedVendorEquipment} />
                </div>
            </div>
        </div>
    )
}