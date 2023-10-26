import React from "react";
import { getVendorMachines } from "../../redux/action-creators/getVendorMachines";
import { useDispatch, useSelector } from "react-redux";

export default function VendorEquipment() {
    const dispatch = useDispatch()
    const vendorEquipment = useSelector((state) => state.vendorEquipment)
    
    React.useEffect(() => {
        dispatch(getVendorMachines())
    },[])
    
    console.log(vendorEquipment)
    return (
        <div className="vendor--equipment--page">
            <div className="vendor--equipment--page--container">
               <h1>This is vendor equipment page</h1>
               <button 
                   onClick={() => dispatch(getVendorMachines())}
               >Get vendor equipment</button>
            </div>
        </div>
    )
}