import { BiCart } from "react-icons/bi";
import { useContext } from "react";
import { CartContext} from "./CartContext";

    const CartWidget = () =>{
        const myContext = useContext(CartContext);

        return(
            <>
            {myContext.totalCantidad() != 0 && <div className="itemsInCart">
            <div className="react-icons">
            {myContext.totalCantidad()}
            <BiCart />
            </div>
            </div>}
            </>
        );
    }

    export default CartWidget;