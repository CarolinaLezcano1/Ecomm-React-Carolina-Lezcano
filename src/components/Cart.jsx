import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const myContext = useContext(CartContext);
    console.log(myContext.cartList)
    return (
        <>
            <h1>I'm Cart</h1>
            <button className="btn" onClick={myContext.clear}>Borrar todo</button>
            {myContext.totalCantidad() != 0 ?
                <>
                    <div>{myContext.totalPrice()}</div>

                    {
                        myContext.cartList.map(item => <li className="detail-p" key={item.id}>{item.nombre}{item.cantidad} ${item.precio}
                            <img src={item.img}></img>
                            <button className="btn" onClick={() => { myContext.removeItem(item.id) }}>Borrar este producto</button></li>)
                    }
                </>
                : <h2>No hay productos</h2>}
        </>
    );
}

export default Cart;