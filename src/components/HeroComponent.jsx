import React from "react";
import { Carousel, Container } from "react-bootstrap";
import Image1 from "../assets/roman-grachev-eygJ8wxgfng-unsplash.jpg";
import Image2 from "../assets/sandy-millar-SmK8is9viYo-unsplash.jpg";
import Image3 from "../assets/shad-arefin-sanchoy-AbIiPjvu5z0-unsplash.jpg";

function HeroComponent() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={Image1} alt="" height={500} width={"100%"} srcset="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image2} alt="" height={500} width={"100%"} srcset="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image3} alt="" height={500} width={"100%"} srcset="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroComponent;
