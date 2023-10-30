import React, { useState } from "react";
import { getVendorMachines } from "../../redux/action-creators/getVendorMachines";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getVendorEquipment } from "../../api";

export default function VendorEquipment() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const dispatch = useDispatch()
    const vendorEquipment = useSelector((state) => state.vendorEquipment)

    React.useEffect(() => {
        async function getData() {
            try {
                setLoading(true)
                const data = await  getVendorEquipment()
                dispatch(getVendorMachines(data))
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
            <div className="vendor--equipment--page">
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

    const equipmentElements = vendorEquipment.map(item => (
        <div key={item.id}>
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
        <div className="vendor-page-width vendor--equipment--page">
            <h1>Your listed equipment</h1>
            <div className="vendor--equipment--page--container">
                {equipmentElements}
            </div>
        </div>
    )
}