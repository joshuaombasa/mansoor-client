import React, {useState} from "react";
import { Link } from "react-router-dom";
import { BsStarFill } from 'react-icons/bs';
import { getVendorMachines } from "../../redux/action-creators/getVendorMachines";
import { useDispatch, useSelector } from "react-redux";


export default function Dashboard() {

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
        <div className="vendor-equipment-item">
                <img src={item.imageUrl} alt="" />
                <div>
                    <h3>{item.name}</h3>
                    <span>Ksh {item.price}/day</span>
                </div>
                <Link to={`/vendor/equipment/${item.id}`} className="dashboard--link">Edit</Link>
        </div>
    ))
    
    return (
        <div className="vendor-page-width dashboard--page">
            <div className="dashboard--page--container">
                <h1>Welcome!</h1>
                <div className="income--section">
                    <div className="income--text">
                        <p>Income</p>
                        <Link to="/vendor/income" className="dashboard--link">Details</Link>
                    </div>
                    <h1>Ksh 400000</h1>
                </div>
                <div className="review--section">
                    <h4>Review score</h4>
                    <BsStarFill/> 
                    <span>5.0/5</span>
                    <Link to="/vendor/reviews" className="dashboard--link">Details</Link>
                </div>
                <div className="vans--section">
                    <div className="header--section">
                        <h3>Your listed equipment</h3>
                        <Link to="/vendor/equipment" className="dashboard--link">View all</Link>
                    </div>
                    {equipmentElements}
                </div>
            </div>
        </div>
    )
}