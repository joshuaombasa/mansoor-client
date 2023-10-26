import React from "react";
import { Link } from "react-router-dom";

export default function EquipmentItem({ item }) {

  return (
    <div>
      <Link to={item.id} className="equipment--item--container">
        <img src={item.imageUrl} alt="" />
        <h3>Ksh{item.price} /day</h3>
        <span>{item.name}</span>
      </Link>
    </div>
  )
}