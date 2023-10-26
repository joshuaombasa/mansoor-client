import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallMachines } from "../../redux/action-creators/machines";
import EquipmentItem from "../../components/EquipmentItem";

export default function Equipment() {
    const [category, setCategory] = useState("")

    function handleCatgoryChange(event) {
        const {name, value} = event.target
        setCategory(value)
    }


    function clearFilters() {
        setCategory("")
    }


    const equipment = useSelector(state => state.equipment)
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        setLoading(true)
        dispatch(getallMachines())
        setLoading(false)
    }, [])




    if (loading) {
        return (
            <div className="equipment--page">
                <h1>Loading...</h1>
            </div>
        )
    }

    const filteredEquipment = category !== ""
                              ? equipment.filter(item => item.name === category) 
                              : equipment
   
        

    const equipmentElements = filteredEquipment.map(item => (
        <EquipmentItem key={item.id} item={item} />
    ))


    return (
        <div className="equipment--page">
            <h1>Explore our equiment</h1>
            <div className="filter--section">
                <span>Filter by type</span>
            <select
                value={category}
                onChange={handleCatgoryChange}
            >
                <option value="">-- Choose --</option>
                {equipment.map(item => (
                    <option key={item.id} value={item.name}>{item.name}</option>
                ))}
            </select>
            <button onClick={clearFilters}>Clear filters</button>
            </div>
            <div className="equipment--page--container">
                {equipmentElements}
            </div>
        </div>
    )
}