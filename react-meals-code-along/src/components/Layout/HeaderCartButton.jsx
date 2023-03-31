import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../../store/GlobalContext";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItem = cartCtx.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
