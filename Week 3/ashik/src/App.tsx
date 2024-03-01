import "./App.css";
// import Products from './components/dynamic-route/Products';
// import Productshow from './components/dynamic-route/Productshow';
import Products from "./components/Products";
import Reducer from "./components/pages/Reducer";
import Aboutpage from "./components/react-route/Aboutpage";
import Contactpage from "./components/react-route/Contactpage";
import Homepage from "./components/react-route/Homepage";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  createContext,
  useReducer,
  useEffect,
  useContext,
  useMemo,
  useState,
} from "react";
import { Context } from "./components/Context/Context";
import axios from "axios";

export const Holder = createContext(null);
export const CartState = () => {
  return useContext(Holder);
};

function App() {
  const [data, setdata] = useState("Ashik");
  function handleClick() {
    setdata("Bala Mugan");
  }
  return (
    <div>
      <p> Hello World {data}</p>
      <button onClick={() => handleClick()}> CLick</button>
    </div>
  );
}

export default App;
