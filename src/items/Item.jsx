import React from "react";

const Item = ({ producto }) => {
    return (
        <>
            <div>{producto.nombre}</div>
            <div>{producto.precio}</div>

            <div>{producto.detail}</div>

            <div>{producto.img}</div>
        </>
    )
    }              

            export default Item;