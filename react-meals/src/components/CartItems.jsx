import React, {useContext} from "react";
import GlobalContext from "../store/cart-context";

const CartItems = () => {
    const [state] = GlobalContext
    console.log(state)
    return (
        <li>
            
        </li>
    )
}

export default CartItems