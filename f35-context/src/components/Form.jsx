import React, { useRef, useContext } from "react";
import GlobalContext from "../state/GlobalContext";

const Form = () => {
  const nameRef = useRef();
  const {state, dispatch} = useContext(GlobalContext)
  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(nameRef.current.value)
    dispatch({type: "CHANGENAME", payload: nameRef.current.value})
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit} action="">
        <h2>what's your name</h2>
        <input type="text" placeholder="What your name" ref={nameRef}/>
        <button>change</button>
      </form>
      <div className="count-container">
        <button onClick={() => dispatch({type: "DECREASE"})}>-</button>
        <h3>Count:</h3>
        <button onClick={() => dispatch({type: "INCREASE"})}>+</button>
      </div>
    </div>
  );
};

export default Form;
