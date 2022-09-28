import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../utils/firebaseConfig";
import { collection, getDocs, where, query } from "firebase/firestore";


const ItemListContainer = ({ greeting }) => {
    const [listaProductos, setListaProductos] = useState([])

    const { categoria } = useParams();


    useEffect(() => {
        const getData = async () => {
            if (categoria){
                const q =  query(collection(db, "productos"), where("categoria", "==", categoria))
            
                const queryShot = await getDocs(q)
                const productos = queryShot.docs.map(item=>({
                    id:item.id,...item.data()
                })) 
                setListaProductos(productos)
            }
            else{
                const queryShot = await getDocs(collection(db, "productos"))
                const productos = queryShot.docs.map(item=>({
                    id:item.id,...item.data()
                })) 
                setListaProductos(productos)
            }
        }
        getData()
    }, [categoria])

    console.log(listaProductos)
    return (
        <>
            <div><ItemList listaProductos={listaProductos} /></div>
        </>
    )
}

export default ItemListContainer;


