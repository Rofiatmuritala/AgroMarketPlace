import React from "react";
import HeroComponent from "../components/HeroComponent";
// import AboutComponent from "../components/AboutComponent";
import AboutComponent from "../components/AboutComponent";
import FooterComponent from "../components/FooterComponent";

function HomePage() {
  return (
    <div>
      <>
        {/* <NavbarComponent /> */}
        <HeroComponent />

        {/* <AboutComponent/> */}


        <AboutComponent />
        <FooterComponent />

      </>
    </div>
  );
}

export default HomePage;
