import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import productos from "./productos";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    

    const customFetch = (productos) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (id) {
                    resolve(productos.find((item) => item.id == id));
                } else resolve(productos);
            }, 2000);
        });
    };

export default ItemDetailContainer;