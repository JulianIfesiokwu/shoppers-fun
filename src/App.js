import "./App.css";
import { useState, useEffect } from "react";
import { options } from "./utils/utils";
import SharedLayout from "./components/SharedLayout/SharedLayout.component";
import HomePage from "./pages/HomePage/HomePage.Page";
import ErrorPage from "./pages/Error/ErrorPage.Page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const categoriesUrl =
    "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list?lang=en&country=asia2";
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(categoriesUrl, options);
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCategories();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout categories={categories} />}>
          <Route index element={<HomePage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
