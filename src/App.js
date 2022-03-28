import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/products' element={<Product></Product>}></Route>
        <Route
          path='/products/:id'
          element={<ProductDetail></ProductDetail>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
