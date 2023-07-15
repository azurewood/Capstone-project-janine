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
              src="/images/drfood.jpg"
              alt="First slide"
              width={1000}
              height={600}
            />
          </div>
          <Carousel.Caption className="carousel-caption">
            <h3>First slide label</h3>
            <p>Hello</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <Image
              className="d-block w-500"
              src="/images/slide1.jpg"
              alt="First slide"
              width={1000}
              height={600}
            />
          </div>
          <Carousel.Caption className="carousel-caption">
            <h3>First slide label</h3>
            <p>Hello</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <Image
              className="d-block w-500"
              src="/images/healthyimg1.jpg"
              alt="First slide"
              width={1000}
              height={600}
            />
          </div>
          <Carousel.Caption className="carousel-caption">
            <h3>First slide label</h3>
            <p>Hello</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <Image
              className="d-block w-500"
              src="/images/healthyimg2.jpg"
              alt="First slide"
              width={1000}
              height={600}
            />
          </div>
          <Carousel.Caption className="carousel-caption">
            <h3>First slide label</h3>
            <p>Hello</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
