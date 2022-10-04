import { createContext, useState } from "react";
import { act } from "react-dom/test-utils";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    //Agregar un producto a la lista del carrito
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

    const totalPrice = () => {
        return cartList.reduce((acumulador, itemP) => acumulador += (itemP.cantidad * itemP.precio), 0);
    }

    const totalProductos = () => cartList.reduce((acumulador, nuevoProducto) => acumulador + nuevoProducto.cantidad, 0);

    // Borra todo el carrito
    const clear = () => {
        setCartList([]);
    }

    // Verifica si el producto está en el carritoLista
    const isInCart = (id) => {
        return cartList.find(item => item.id === id);
    }

    // Quitar un producto del carrito lista
    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id));
    }

    // Agregar cantidad a un producto en el carritoLista
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