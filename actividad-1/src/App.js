import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (<>
    <NavBar />
    <ItemListContainer greeting={"TIENDA"} />
    <ItemCount />
  </>
  );
}

export default App;
