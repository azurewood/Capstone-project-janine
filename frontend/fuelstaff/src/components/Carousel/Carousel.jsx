import React from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import "./carouselstyles.css";

export default function CustomCarousel() {
  return (
    <div className="carousel-container">
      <Carousel fade>
        <Carousel.Item>
          <div className="carousel-image-container">
            <Image
              className="d-block w-500"
              src="/images/besmart.jpg"
              alt="First slide"
              width={1000}
              height={600}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <Image
              className="d-block w-500"
              src="/images/stethoscope.jpg"
              alt="Second slide"
              width={1000}
              height={600}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <Image
              className="d-block w-500"
              src="/images/canva.jpg"
              alt="Third slide"
              width={1000}
              height={600}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <Image
              className="d-block w-500"
              src="/images/fruitandveg.jpg"
              alt="Last slide"
              width={1000}
              height={600}
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
