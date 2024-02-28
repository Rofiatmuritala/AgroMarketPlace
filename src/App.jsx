import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { ToastContainer } from "react-toastify";
import LoginPage from "./pages/LoginPage";
import "react-toastify/dist/ReactToastify.css";
import ProductsPage from "./pages/products-page";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

import AboutPage from "./pages/AboutPage";
import FooterComponent from "./components/FooterComponent";


function App() {
  return (
    <>
      <NavbarComponent />
      {/* <FooterComponent/> */}
      <ToastContainer />

      {/* This is to define or tell us all the routes we have on our website */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          {/* If someone clicks on the products, it will show the Products Page */}
          {/* <Route path="/products" element={<ProductsPage />} /> */}
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
