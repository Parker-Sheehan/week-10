import './App.css';
import Greeting from './components/Greeting';
import Header from './components/Header';
import ItemsCard from './components/ItemsCard';

function App() {
  return (
    <div className="App">
      <Header/>
      <body>
        <Greeting></Greeting>
        <ItemsCard></ItemsCard>
      </body>
    </div>
  );
}

export default App;
