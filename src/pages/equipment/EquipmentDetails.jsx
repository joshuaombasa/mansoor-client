import React from "react";
import { Link , useParams} from "react-router-dom";
import getSelectedMachine from "../../redux/action-creators/getSelectedMachine";
import { useDispatch, useSelector } from "react-redux";

export default function EquipmentDetails() {

    const [loading, setLoading] = React.useState(false)

    const dispatch = useDispatch()
    const selectedEqupment = useSelector((state) => state.selectedEquipment)

    const params = useParams()

    console.log(params)

    React.useEffect(() => {
        setLoading(true)
        dispatch(getSelectedMachine(params.id))
        setLoading(false)
    }, [])

    console.log(selectedEqupment)

    if (loading) {
        return (
            <div className="equipment--details--container">
                <h1>Loading...</h1>
            </div>
        )
    }

    function renderDetails () {
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