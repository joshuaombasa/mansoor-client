import React, {useState} from "react";
import { Link, useParams } from "react-router-dom";
import getSelectedMachine from "../../redux/action-creators/getSelectedMachine";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedEquipment } from "../../api";

export default function EquipmentDetails() {

    const [loading, setLoading] = React.useState(false)

    const [error, setError] = useState("")

    const dispatch = useDispatch()
    const selectedEqupment = useSelector((state) => state.selectedEquipment)

    const params = useParams()

    React.useEffect(() => {
        async function getData() {
            try {
                setLoading(true)
                const data = await getSelectedEquipment(params.id)
                dispatch(getSelectedMachine(data))
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
            <div className="equipment--details--container">
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

    function renderDetails() {
        return (
            <div className="equipment--details--container">
                <img src={selectedEqupment.imageUrl} alt="" />
                <span>{selectedEqupment.name}</span>
                <h3>Ksh {selectedEqupment.price}/day</h3>
                <p>{selectedEqupment.description}</p>
                <Link>Rent this {selectedEqupment.name}</Link>
            </div>
        )
    }

    return (
        <div className="equipment-details--page">
            <Link
                to={`..`}
                relative="path"
                className="back--button"
            >&larr; <span>Back to all equipment</span></Link>
            {selectedEqupment && renderDetails()}
        </div>
    )
}