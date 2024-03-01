import "./NewApp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { ToastContainer } from "react-toastify";
import LoginPage from "./pages/LoginPage";
import "react-toastify/dist/ReactToastify.css";
import ProductsPage from "./pages/ProductsPage";

import DashboardPage from "./pages/DashboardPage";

import AboutPage from "./pages/AboutPage";
import FooterComponent from "./components/FooterComponent";
import CartContextProvider from "./contexts/CartContextProvider";
import CartPage from "./pages/CartPage";
import ProductContextProvider from "./contexts/ProductContextProvider";
import FilterSearchPage from "./pages/FilterSearchPage";
import NewNavBarComponent from "./components/NewNavBarComponent";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        {/* This is to define or tell us all the routes we have on our website */}
        <BrowserRouter>
          {/* <NavbarComponent /> */}
          <NewNavBarComponent />
          {/* <FooterComponent/> */}
          <ToastContainer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* If someone clicks on the products, it will show the Products Page */}
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/search" element={<FilterSearchPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
