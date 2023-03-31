import React from "react";
import Modal from "../UI/Modal";
import ReactDom from "react-dom";
import CartItems from "./CartItems";

const Cart = () => {


  {
    ReactDom.createPortal(
        <Modal>
        <CartItems />
      </Modal>,document.getElementById('modal'))

  }
};

export default Cart;
