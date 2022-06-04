import "./App.css";
import { useState, useEffect } from "react";
import DetailedProduct from "./components/DetailedProduct/DetailedProduct.component";
import SharedLayout from "./components/SharedLayout/SharedLayout.component";
import HomePage from "./pages/HomePage/HomePage.Page";
import ErrorPage from "./pages/Error/ErrorPage.Page";
import ProductsPage from "./pages/Products/Products.Page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const abortCont = new AbortController();

    const fetchCategories = async () => {
      try {
        const response = await fetch(url, {
          signal: abortCont.signal,
        });
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        // console.log(err);
        if (err.name === "AbortError") {
          // console.log("yes");
        }
      }
    };

    fetchCategories();

    return () => {
      abortCont.abort();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route
            path="/products"
            element={<ProductsPage products={products} />}
          ></Route>
          <Route
            path="/products/:productId"
            element={<DetailedProduct products={products} />}
          ></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
