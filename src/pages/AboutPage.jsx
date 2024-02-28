import React from "react";
import FooterComponent from "../components/FooterComponent";
import AboutComponent from "../components/AboutComponent";
import TeamComponent from "../components/TeamComponent";
import TestimonialComponent from "../components/TestimonialComponent";


function AboutPage () {
    return(
        <div>
            <>
            <AboutComponent/>
            <TestimonialComponent
             />
            <TeamComponent />
            <FooterComponent/>
            </>
        </div>
    )

    };

    export default AboutPage;