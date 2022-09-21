import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {
  const [contador, setContador] = useState(0);

  const onAdd = (cantidad) => {
    setContador(cantidad);
  }

  return (
  <>
    <div>{item.nombre}</div>
    <img src={item.img} alt="imagenDetail" width={250}/>
    <div>{item.detail}</div>
    <div>{item.precio}</div>

{ contador === 0 ? <ItemCount stock={10} initial={contador} onAdd={onAdd} />
  : <Link to="/cart">
    <button type="button" className="btn">Finalizar compra</button>
  </Link>}
  
    </>)
}

export default ItemDetail;