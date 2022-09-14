import React from "react";
import { useState } from "react";

const ItemCount = ({ initial, stock }) => {

    const [contador, setContador] = useState(initial)

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    const agregarAlCarrito = () => {
        setContador(contador);
        
    }


    return (
        <>
            <button onClick={() => sumar()} className="btn">+</button>
            <span>{contador}</span>
            <button onClick={() => restar()} className="btn">-</button>
            <button onClick={() => agregarAlCarrito()} className="btn">Agregar Al Carrito</button>

        </>
    );
}

export default ItemCount;