import React from "react";
import FooterComponent from "../components/FooterComponent";
import AboutComponent from "../components/AboutComponent";
import TeamComponent from "../components/TeamComponent";
import TestimonialComponent from "../components/TestimonialComponent";

function AboutPage() {
  return (
    <div>
      <>
        <div className="mb-16"></div>
        <AboutComponent />
        {/* <TestimonialComponent />
        <TeamComponent /> */}
      </>
    </div>
  );
}

export default AboutPage;
