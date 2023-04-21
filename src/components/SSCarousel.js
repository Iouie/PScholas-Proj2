import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { useEffect } from "react";

const CarouselPage = (props) => {
  //   useEffect(() => {});
  //   console.log(props.screenshots[1]);
  return (
    <Carousel>
      {/* <div>
        <img src={`${props.screenshots[0].image}/200x200`} alt="1" />
        <p className="legend">Legend 1</p>
      </div>

      <div>
        <img src={`${props.screenshots[1].image}/200x200`} alt="2" />
        <p className="legend">Legend 2</p>
      </div>

      <div>
        <img src={`${props.screenshots[2].image}/200x200`} alt="3" />
        <p className="legend">Legend 3</p>
      </div> */}
    </Carousel>
  );
};

export default CarouselPage;
