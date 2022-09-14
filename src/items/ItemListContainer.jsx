import React, {useState, useEffect} from "react";
import productos from "./productos";
import ItemList from "./ItemList"


const ItemListContainer = ({greeting}) => {
    const [listaProductos, setListaProductos] = useState ([])

    const customFetch = (productos) => {
        return new Promise ((resolve, reject) => {
            setTimeout(
                () => {
                    resolve(productos);
                },
                2000
            );
        });
    };

    useEffect(() => {
        customFetch(productos)
        .then(data => setListaProductos(data))
    }, [])

    console.log(listaProductos)
    return(
        <>
            <div><ItemList listaProductos={listaProductos}/></div>
        </>
    )

};

export default ItemListContainer;