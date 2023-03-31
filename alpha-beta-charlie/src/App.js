import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { GlobalContextProvider } from "./components/store/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <Header></Header>
        <Body></Body>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
