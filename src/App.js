import "./App.css";
import { useState, useEffect } from "react";
import DetailedProduct from "./components/DetailedProduct/DetailedProduct.component";
import SharedLayout from "./components/SharedLayout/SharedLayout.component";
import HomePage from "./pages/HomePage/HomePage.Page";
import ErrorPage from "./pages/Error/ErrorPage.Page";
import ProductsPage from "./pages/Products/Products.Page";
import CartPage from "./pages/Cart/CartPage.component";
import SavedPage from "./pages/Saved/Saved.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckOutPage from "./pages/Checkout/CheckoutPage.component";
import ScrollToTop from "./components/ScrollToTop.component";

function App() {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const searchForItem = (value) => {
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

  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  const removeFromCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const addToFavourites = (product) => {
    const exist = favourites.find((x) => x.id === product.id);

    if (exist) {
      return;
    } else {
      setFavourites([...favourites, product]);
    }
  };

  const removeFromFavourites = (product) => {
    const exist = favourites.find((x) => x.id === product.id);

    if (exist) {
      setFavourites(favourites.filter((x) => x.id !== product.id));
    }
  };

  const clearFavouritesList = () => {
    setFavourites([]);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout
              searchForItem={searchForItem}
              cartItems={cartItems}
              favourites={favourites}
            />
          }
        >
          <Route index element={<HomePage />}></Route>
          <Route
            path="products"
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
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          ></Route>
          <Route
            path="products/:productId"
            element={
              <DetailedProduct
                products={products}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                quantity={quantity}
                setQuantity={setQuantity}
                addToFavourites={addToFavourites}
              />
            }
          ></Route>
          <Route
            path="cart"
            element={
              <CartPage
                cartItems={cartItems}
                setCartItems={setCartItems}
                filtered={filtered}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            }
          />
          <Route
            path="saved"
            element={
              <SavedPage
                favourites={favourites}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                removeFromFavourites={removeFromFavourites}
                clearFavouritesList={clearFavouritesList}
              />
            }
          />
          <Route
            path="/checkout"
            element={<CheckOutPage cartItems={cartItems} />}
          />
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
