import React, { useEffect, useState } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getSelectedVendorMachine from "../../redux/action-creators/getSelectedVendorMachine";
import { getSelectedEquipment } from "../../api";

export default function VendorEquipmentDetails() {

    const [loading, setLoading] = useState(true)
    const[error, setError] = useState("")
    const params = useParams()

    const selectedVendorEquipment = useSelector(state => state.selectedVendorEquipment)
    const dispatch = useDispatch()

    useEffect(() => {
        async function getData() {
            try {
                setLoading(true)
                const data = await getSelectedEquipment(params.id)
                dispatch(getSelectedVendorMachine(data))
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [])

    if (loading) {
        return (
            <div className="vendor--equipment--details--page">
                <h1>Loading...</h1>
            </div>
        )
    }

    if (error) {
        return (
            <>
                <h1>Error: {error.message}</h1>
                <pre>{error.status} - {error.statusText}</pre>
            </>
        )
    }

    const activeStyle = {
        textDecoration: "underline"
    }

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
                        <NavLink
                           style={({isActive}) => isActive ? activeStyle : null} 
                           to="."
                           end
                        >Details</NavLink>
                        <NavLink
                           style={({isActive}) => isActive ? activeStyle : null} 
                           to="pricing"
                        >Pricing</NavLink>
                        <NavLink
                           style={({isActive}) => isActive ? activeStyle : null} 
                           to="photos"
                        >Photos</NavLink>
                    </nav>
                    <Outlet context={selectedVendorEquipment} />
                </div>
            </div>
        </div>
    )
}