import React from 'react';
import {Route, Routes} from "react-router-dom"
import './App.css';
import {Navigation} from "./components/Navigation";
import {HomePage} from "./components/HomePage";
import {Cart} from "./components/Cart";
import {StoreFront} from "./components/StoreFront";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<HomePage/>}/>
        <Route path="shop" element={<StoreFront/>}/>
        <Route path="cart" element={<Cart/>}/>
      </Route>
    </Routes>
  );
}

export default App;
