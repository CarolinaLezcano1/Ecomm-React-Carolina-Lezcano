import { createContext, useState } from "react";
import { act } from "react-dom/test-utils";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

   
    const addItem = (producto, cantidad) => {
        if (isInCart(producto.id) === undefined) {
            producto.cantidad = cantidad;
            setCartList([...cartList, producto]);
        }
        else
        {
            setCartList(cartList.map(product => product.id == producto.id ? {...product, cantidad:product.cantidad + cantidad} : product ));
        }  
    }
    console.log(cartList)

    const totalPrice = () => {
        console.log(cartList)
        return cartList.reduce((acumulador, itemP) => acumulador += (itemP.cantidad * itemP.precio), 0);
    }

    const totalProductos = () => cartList.reduce((acumulador, nuevoProducto) => acumulador + nuevoProducto.cantidad, 0);

    const clear = () => {
        setCartList([]);
    }

    const isInCart = (id) => {
        return cartList.find(item => item.id === id);
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id));
    }

    const totalCantidad = () => {
        let totalCan = cartList.map(item => item.cantidad)
        return(
            totalCan.reduce((acumulador, cantidad) => acumulador += cantidad, 0)
        )
    }


    return (
        <CartContext.Provider value={{cartList, addItem, clear, removeItem, totalPrice, totalProductos, totalCantidad}}>
        {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;