import "./App.css";
import { useState, useEffect } from "react";
// import { options } from "./utils/utils";
import SharedLayout from "./components/SharedLayout/SharedLayout.component";
import HomePage from "./pages/HomePage/HomePage.Page";
import ErrorPage from "./pages/Error/ErrorPage.Page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const categoriesUrl = "https://fakestoreapi.com/products/categories";
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const abortCont = new AbortController();

    const fetchCategories = async () => {
      try {
        const response = await fetch(categoriesUrl, {
          signal: abortCont.signal,
        });
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        console.log(err);
        if (err.name === "AbortError") {
          console.log("yes");
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
          <Route index element={<HomePage categories={categories} />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
