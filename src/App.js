import { lazy, Suspense } from "react";
import "./App.css";
import { React } from "react";
import { Routes, Route } from "react-router-dom";
// import Logout from "./components/Logout";
import NavBar from "./components/navBar";
// import Products from "./components/Products";
// import ProductsManagment from "./components/ProductsManagment";
// import Signup from "./components/Signup";
// import Singin from "./components/Singin";
// import AddProducts from "./components/AddProducts";
// import UpdateProduct from "./components/UpdateProduct";
import MyFallbackComponent from "./components/index/MyFallbackComponent";
import Product_details from "./components/index/product_dtatils";
const LazyHomepage = lazy(() => import("./components/index/Home"));

function App() {
  return (
    <div className="app ">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<MyFallbackComponent />}>
              <LazyHomepage />
            </Suspense>
          }
        />
        <Route path="/product/:prdId" element={<Product_details />} />
        {/* <Route path="/signIn" element={<Singin />} />
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
        <Route path="/update" element={<UpdateProduct />} /> */}
      </Routes>
    </div>
  );
}

export default App;
