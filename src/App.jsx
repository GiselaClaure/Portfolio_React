import './App.css';
import { Home, Portfolio,Contact } from "./pages";
import {Navbar} from "./core";


function App() {
  return (
    <>
        <Navbar></Navbar>
        <Home></Home>
        <Portfolio></Portfolio>
        <Contact></Contact>
    </>
    
  );
}

export default App;
