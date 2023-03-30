import { createContext, useReducer } from "react";

let InititalState = {
    name: "Parker",
    count: 0
}

const GlobalContext = createContext()

const GlobalContextProvider = (props) => {

    const reducer = (state, action) => {
        switch(action.type){
            case "CHANGENAME":
                return {...state, name: action.payload}
            case "INCREASE":
                return {...state, count: state.count++}
            case "DECREASE":
                return {...state, count: state.count--}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, InititalState)

    return(
        <GlobalContext.Provider value={{state, dispatch}}>
            {props.children}
        </GlobalContext.Provider>
    )

}

export {GlobalContextProvider}
export default GlobalContext