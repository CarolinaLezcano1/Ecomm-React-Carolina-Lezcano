import React , { Fragment } from "react";

const ItemListContainer= (props) => {
    return(
        <Fragment>
            <h1>Bebida {props.bebidas}</h1>
        </Fragment>
    );
}

export default ItemListContainer;