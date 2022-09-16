import React from 'react'

const ItemDetail = ({item}) => {
  return (<>
    <div>{item.nombre}</div>
    <div>{item.detail}</div>
    <img src={item.img} alt="imagenDetail" width={250}/>

    </>)
}

export default ItemDetail;