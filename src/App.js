import { lazy, Suspense } from "react";
import "./App.css";
import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Logout from "./components/Logout";
import NavBar from "./components/navBar";
import Products from "./components/Products";
import ProductsManagment from "./components/ProductsManagment";
import Signup from "./components/Signup";
import Singin from "./components/Singin";
import AddProducts from "./components/AddProducts";
import UpdateProduct from "./components/UpdateProduct";
const LazyAbout = lazy(() => import("./components/Products"));

function App() {
  return (
    <div className="app ">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<Singin />} />
        <Route path="/signUp" element={<Signup />} />
        <Route
          path="/products"
          element={
            <Suspense fallback="loading...">
              <LazyAbout />
            </Suspense>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/managment" element={<ProductsManagment />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/addproduct" element={<AddProducts />} />
        <Route path="/update" element={<UpdateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
