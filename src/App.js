import "./App.css";
import { useState, useEffect } from "react";
import DetailedProduct from "./components/DetailedProduct/DetailedProduct.component";
import SharedLayout from "./components/SharedLayout/SharedLayout.component";
import HomePage from "./pages/HomePage/HomePage.Page";
import ErrorPage from "./pages/Error/ErrorPage.Page";
import ProductsPage from "./pages/Products/Products.Page";
import CartPage from "./pages/Cart/CartPage.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.component";

function App() {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const searchForItem = (value) => {
    console.log(value);
    if (value === "") {
      // display all products
    }
    if (value !== "") {
      // search through products array and display product
      const possibleProducts = [];
      const searchedProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(value.toLowerCase());
      });
      possibleProducts.push(searchedProducts);
      setFiltered(possibleProducts);
      value = "";
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      setFiltered(data);
      setLoading(false);
    } catch (err) {
      // console.log(err);
    }
  };

  const addToFavourites = (product) => {
    console.log(favourites, product);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<SharedLayout searchForItem={searchForItem} />}
        >
          <Route index element={<HomePage />}></Route>
          <Route
            path="/products"
            element={
              <ProductsPage
                products={products}
                setFiltered={setFiltered}
                filtered={filtered}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
                loading={loading}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
                setFavourites={setFavourites}
                addToFavourites={addToFavourites}
                cart={cart}
                setCart={setCart}
              />
            }
          ></Route>
          <Route
            path="/products/:productId"
            element={<DetailedProduct products={products} />}
          ></Route>
          <Route
            path="/cart"
            element={<CartPage cart={cart} setCart={setCart} />}
          ></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
