import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import productos from "./productos";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const { id } = useParams();
    console.log(id);

    const customFetch = (productos) => {
        return new Promise ((resolve, reject) => {
            setTimeout(
                () => {
                    if(id) {
                        resolve(productos.find((item) => item.id == id));
                    }
                    else resolve(productos);
                },
                2000
            );
        });
    };


    useEffect(() => {
        customFetch(productos[4])
        .then(result => setItem(result))
        .catch(err => console.log(err))
    }, []);

    return(
        <ItemDetail item={item} />
    )
    }

export default ItemDetailContainer;