import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import BaseRouter from "./constants/Routes";
import { Navbar } from "react-bootstrap";




function App() {
  return (
    <><BaseRouter/>
    <Navbar/>
    </>
  );
}

export default App;
