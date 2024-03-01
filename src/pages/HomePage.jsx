import React from "react";
import HeroComponent from "../components/HeroComponent";
import AboutComponent from "../components/AboutComponent";
import ProductsComponent from "../components/ProductsComponent";

function HomePage() {
  return (
    <>
      <HeroComponent />
      <AboutComponent />
      <div className="py-10">
        <ProductsComponent />
      </div>
    </>
  );
}

export default HomePage;
