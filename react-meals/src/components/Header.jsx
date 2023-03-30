import React, {useContext} from "react";
import styles from "./Header.module.css";
import GlobalContext from "../store/cart-context";



const Header = () =>{

  const {state, dispatch} = useContext(GlobalContext)

  console.log(state)

  return (
      <nav>
        <h2 className={styles.item}>The food Place</h2>
        <div>
          <h3 onClick={() => dispatch({type:"MODAL_ON"})} className={styles.item}>Your Cart</h3>
        </div>
      </nav>

  );
  }
export default Header;
