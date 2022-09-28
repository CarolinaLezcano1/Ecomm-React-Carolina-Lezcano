import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../utils/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const getDato = async ()=>{
            const docSnap = await getDoc(doc(db, "productos", id))
            const product = {id:id,...docSnap.data()}
            setItem(product)
        }
        getDato()

    }, [id]);

    return(
        <ItemDetail item={item} />
    )
    }

export default ItemDetailContainer;