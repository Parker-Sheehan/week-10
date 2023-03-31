import React, {createContext, useReducer} from "react";

let InitialState = {
    modalState : false,
    foodArr : []
}

const GlobalContext = createContext()

const GlobalContextProvider = (props) => {

    const reducer = (state, action) => {
        switch(action.type){
            case "MODAL_ON":
                return {...state, modalState: !state.modalState}
            case "ADD_OBJ":
                return {...state, foodArr: action.payload}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, InitialState)

    return(
        <GlobalContext.Provider value={{state, dispatch}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export {GlobalContextProvider}
export default GlobalContext;
