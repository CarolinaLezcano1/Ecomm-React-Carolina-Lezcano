import { increment, serverTimestamp } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { serverTimestamp, doc, setDoc, collection, increment, updateDoc } from "firebase/firestore";
import db from "../utils/firebaseConfig";

const Cart = () => {
    const myContext = useContext(CartContext);
    console.log(myContext.cartList)

    const createOrder = async () => {
        const itemsForDB = test.cartList.map(item => ({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity
        }))
        let order = {
            buyer: {
                nombre: "Amira Nahir",
                email: "amiranahir@gmail.com",
                phone: "1165489623"
            },
            items: itemsForDB,
            date: serverTimestamp(),
            total: test.totalCantidad()

        }
        const newOrderRef = doc(collection(db, item.id))
        await setDoc(newOrderRef, order)

        test.cartList.forEach( async (item) => {
            const itemRef = doc(db, "productos", "id");
            await updateDoc(itemRef, {
                stock: increment(-item.quantity)
            });
        })
        test.removeItem()

        alert("Orden creada: " + newOrderRef.id)
    }

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
                    <button onClick={createOrder}>Crear orden</button>
                </>
                : <h2>No hay productos</h2>}
        </>
    );
}

export default Cart;