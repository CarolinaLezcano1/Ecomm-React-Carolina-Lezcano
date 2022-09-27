import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";


const Item = ({ producto }) => {
    return (
        <>
                <div className="card">
                    <img src={producto.img} alt="birra" width={200} />
                    <h4>{producto.nombre}</h4>
                    <p>{producto.detail}</p>
                    <Link to={`/item/${producto.id}`}><button className="btn">Ver producto</button></Link>
                </div>
        </>
    )
}

export default Item;