import React, {useContext} from "react";
import styles from "./Header.module.css";
import GlobalContext from "../store/cart-context";



const Header = () =>{

  const {state, dispatch} = useContext(GlobalContext)

  let count = 0 
  for (let i =0; i < state.foodArr.length; i++){
    count += +state.foodArr[i].qty
  }

  console.log(state)
  return (
      <nav>
        <h2 className={styles.item}>The food Place</h2>
        <div onClick={() => dispatch({type:"MODAL_ON"})}>
          <h3 className={styles.item}>Your Cart</h3>
          <h4>{count}</h4>
        </div>
      </nav>

  );
  }
export default Header;
