import React, { useRef, useContext} from "react";
import styles from "./Item.module.css";
import GlobalContext from "../store/cart-context";


const Item = (props) => {
  const quantityRef = useRef();
  const {state, dispatch} = useContext(GlobalContext)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (quantityRef.current.value>0){
    let obj = {
      name : props.meal.name,
      price : props.meal.price,
      qty : quantityRef.current.value
    }

    let yay = [...state.foodArr,obj]
    dispatch({type: "ADD_OBJ", payload: yay})
    }}

    return (
      <li key={props.index} className={styles.item}>
        <div className={styles.info}>
          <h4>{props.meal.name}</h4>
          <h4 className={styles.description}>{props.meal.description}</h4>
          <h4 className={styles.price}>{props.meal.price}</h4>
        </div>
        <form onSubmit={evt => handleSubmit(evt)} className={styles.input}>
          <label>Amount</label>
          <input ref={quantityRef} type="number" placeholder="0"/>
          <button> +Add</button>
        </form>
      </li>
    );

};

export default Item;
