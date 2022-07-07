import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (<>
    <NavBar />
    <ItemListContainer />
  </>
  );
}

export default App;
