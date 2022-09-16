import React from "react";
// import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";


const Item = ({ producto }) => {
    return (
        <>
            <div className="container">
                <div className="card">
                    <img src={producto.img} alt="birra" width={150} />
                    <h4>{producto.nombre}</h4>
                    <p>{producto.detail}</p>
                    <ItemCount initial={1} stock={10} />
                    {/* { <Link to={`/item/${producto.id}`}>
                        <button>Ver disponibilidadc</button>
                    </Link> } */}
                </div>
            </div>
        </>
    )
}

export default Item;