import React, {useState, useEffect} from "react";
import productos from "./productos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({greeting}) => {
    const [listaProductos, setListaProductos] = useState ([])

    const { categoria } = useParams();

    const customFetch = (productos) => {
        return new Promise ((resolve, reject) => {
            setTimeout(
                () => {
                    if(categoria){
                        resolve(
                            productos.filter((producto) => producto.categoria == categoria)
                        );
                    }
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