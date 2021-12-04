import React from "react";

export default function Carousel() {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100 "
            src="./assets/images/header.jpg"
            alt="First slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100 "
            src="./assets/images/header.jpg"
            alt="Second slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100 "
            src="./assets/images/header.jpg"
            alt="Third slide"
          />
        </div>
      </div>
    </div>
  );
}
