import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout.component";
import HomePage from "./pages/HomePage/HomePage.Page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/Home" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
