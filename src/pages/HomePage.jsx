import React from "react";
import HeroComponent from "../components/HeroComponent";
// import AboutComponent from "../components/AboutComponent";
import AboutComponent from "../components/AboutComponent";
import FooterComponent from "../components/FooterComponent";
import ProductComponent from "../components/ProductComponent";

function HomePage() {
  return (
    <div>
      <>
        {/* <NavbarComponent /> */}
        <HeroComponent />

        {/* <AboutComponent/> */}


        <AboutComponent />
        <ProductComponent />
        <FooterComponent />

      </>
    </div>
  );
}

export default HomePage;
