import { useContext } from "react";
import { CartContext } from "./CartContext";
import { serverTimestamp, doc, setDoc, collection, increment, updateDoc } from "firebase/firestore";
import db from "../utils/firebaseConfig";

const Cart = () => {
    const myContext = useContext(CartContext);
    console.log(myContext.cartList)

    // Crea la orden de compra y las envia a la base de datos y actualiza el stock
    const createOrder = async () => {
        const itemsForDB = myContext.cartList.map(item => ({
            id: item.id,
            title: item.nombre,
            price: item.precio,
            quantity: item.cantidad
        }))
        let order = {
            buyer: {
                nombre: "Amira Nahir",
                email: "amiranahir@gmail.com",
                phone: "1165489623"
            },
            items: itemsForDB,
            date: serverTimestamp(),
            total: myContext.totalCantidad()

        }
        const newOrderRef = doc(collection(db, "orders"))
        await setDoc(newOrderRef, order)

        // Recorre el carritoLista y segun el producto que encuentre actualiza su stock
        myContext.cartList.forEach( async (item) => {
            const itemRef = doc(db, "productos", item.id);
            await updateDoc(itemRef, {
                stock: increment(-item.quantity)
            });
        })
        myContext.clear()

        alert("Orden creada: " + newOrderRef.id)
    }

    return (
        <>
            <button className="btn" onClick={myContext.clear}>Borrar todo</button>
            {myContext.totalCantidad() != 0 ?
                <>
                    <div className="totalPrice">${myContext.totalPrice()}</div>

                    {
                        myContext.cartList.map(item => <li className="detail-p" key={item.id}>{item.nombre}{item.cantidad} ${item.precio}
                            <img src={item.img}></img>
                            <button className="btn" onClick={() => { myContext.removeItem(item.id) }}>Borrar este producto</button></li>)
                    }
                    <button className="btn" onClick={ () => {createOrder()}}>Crear orden</button>
                </>
                : <h2>No hay productos</h2>}
        </>
    );
}

export default Cart;