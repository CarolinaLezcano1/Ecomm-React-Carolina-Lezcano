import React from "react";
import ItemCount from "./ItemCount";


const Item = ({ producto }) => {
    return (
        <>
                <div className="card">
                    <img src={producto.img} alt="birra" width={200} />
                    <h4>{producto.nombre}</h4>
                    <p>{producto.detail}</p>
                    <button className="btn">Ver disponibilidad</button>
                </div>
        </>
    )
}

export default Item;