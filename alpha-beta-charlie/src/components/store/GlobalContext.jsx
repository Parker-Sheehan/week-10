import { createContext, useReducer } from "react";

let InititalState = {
  names: [],
  coolBool: true
};

const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_NAME":
        let name = action.name
        let list = state.names

        list.concat(name)
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, InititalState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider };
export default GlobalContext;
