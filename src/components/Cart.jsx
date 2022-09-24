import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const myContext = useContext(CartContext);
    console.log(myContext.cartList)
    return (
        <>
            <h1>I'm Cart</h1>
            <button className="btn" onClick={myContext.clear}>Borrar todo</button>
            {
                 myContext.cartList.map(item => <li key={item.id}>{item.nombre} ${item.precio}
                    <button className="btn" onClick={myContext.removeItem(item.id)}>Borrar este producto</button></li>)
            }
        </>
    );
}

export default Cart;