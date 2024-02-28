import React from "react";
import image5 from "../assets/Team/Team pic 5.jpg";
import image2 from "../assets/Team/Team pic 2.jpg";
import Image3 from "../assets/Team/Team pic 3.jpg";
import Image4 from "../assets/Team/Team pic 4.jpg";

function TeamComponent() {
    return(
        <section class="Team">

    <h2>Meet our Team</h2>

    <div class="Team-types">
        <div class="Team-Names">
            <div>
                <img src={image5} alt="flower woman" />
            </div>
            <div>
                <h4>Freda Menz</h4>
            </div>
         </div>
            <div class="Team-Names">
                <div>
                    <img src={image2} alt="flower woman" />
                </div>
                <div>
                    <h4>Ella Fiji</h4>
                </div>
            </div>

            <div class="Team-Names">
                <div>
                    <img src={Image3} alt="flower woman" />
                </div>
                <div>
                    <h4>Jerry Bonz</h4>
                </div>
            </div>

            <div class="Team-Names">
                <div>
                    <img src={Image4} alt="flower woman" />
                </div>
                <div>
                    <h4>Jennifer Yags</h4>
                </div>
            </div>
        </div>
    
        
</section>    

    );
}

export default TeamComponent;