import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Products from './Pages/Products';
import ProductDetails from './Pages/ProductDetails';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/product" element={<ProductDetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
