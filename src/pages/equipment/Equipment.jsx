import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallMachines } from "../../redux/action-creators/machines";

import EquipmentItem from "../../components/EquipmentItem";
import { getAllEquipment } from "../../api";

export default function Equipment() {
    const [category, setCategory] = useState("")
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = useState("")


    function handleCatgoryChange(event) {
        const { name, value } = event.target
        setCategory(value)
    }


    function clearFilters() {
        setCategory("")
    }


    const equipment = useSelector(state => state.equipment)
    const dispatch = useDispatch()


    // React.useEffect(() => {
    //     setLoading(true)
    //     dispatch(getallMachines())
    //     setLoading(false)
    // }, [])

    useEffect(() => {
        async function getData() {
            try {
                const data = await getAllEquipment()
                dispatch(getallMachines(data))
                console.log(data)
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
            <div className="equipment--page">
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