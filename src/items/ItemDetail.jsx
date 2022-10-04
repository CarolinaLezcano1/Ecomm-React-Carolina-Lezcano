import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from "../components/CartContext";



const ItemDetail = ({ item }) => {
  const [contador, setContador] = useState(0);
  const myContext = useContext(CartContext);

  const onAdd = (cantidad) => {
    setContador(cantidad);
    myContext.addItem(item, cantidad);
  }

  return (
    <>
      <div className="itemNombre">{item.nombre}</div>
      <img src={item.img} alt="imagenDetail" width={250} />
      <div className="itemDetail">{item.detail}</div>
      <div className="itemPrecio">${item.precio}</div>

      {contador === 0 ? <ItemCount stock={10} initial={contador} onAdd={onAdd} />
        : <Link to="/Ecomm-React-Carolina-Lezcano/cart">
          <button type="button" className="btn">Finalizar compra</button>
        </Link>}

    </>)
}

export default ItemDetail;