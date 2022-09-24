import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (producto, cantidad) => {
        setCartList([...cartList, producto]);
    }

    const clear = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id));
    }

    const isInCart = (id) => {
        return cartList.find(item => item.id === id) ? true : false;
    }


    return (
        <CartContext.Provider value={{cartList, addItem, clear, removeItem}}>
        {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;