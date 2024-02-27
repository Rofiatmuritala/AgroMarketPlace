import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import HeroComponent from "../components/HeroComponent";
import AboutComponent from "../components/AboutComponent";
import FooterComponent from "../components/FooterComponent";

function HomePage() {
  return (
    <div>
      <>
        {/* <NavbarComponent /> */}
        <HeroComponent />
        <AboutComponent />
        <FooterComponent />
      </>
    </div>
  );
}

export default HomePage;
