import React, { useState } from "react";
import { getVendorMachines } from "../../redux/action-creators/getVendorMachines";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function VendorEquipment() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const vendorEquipment = useSelector((state) => state.vendorEquipment)

    React.useEffect(() => {
        setLoading(true)
        dispatch(getVendorMachines())
        setLoading(false)
    }, [])

    if (loading) {
        return (
            <div className="vendor--equipment--page">
                <h1>Loading...</h1>
            </div>
        )
    }

    const equipmentElements = vendorEquipment.map(item => (
        <div>
            <Link to={item.id} className="vendor-equipment-item">
                <img src={item.imageUrl} alt="" />
                <div>
                    <h3>{item.name}</h3>
                    <span>Ksh {item.price}/day</span>
                </div>
            </Link>
        </div>
    ))

    return (
        <div className="vendor--equipment--page">
            <h1>Your listed equipment</h1>
            <div className="vendor--equipment--page--container">
                {equipmentElements}
            </div>
        </div>
    )
}