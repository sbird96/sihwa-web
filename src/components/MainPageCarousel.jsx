// Data API
import carouselData from "../assets/CarouselData.json";

var $ = require("jquery");

if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options = {
  loop: true,
  margin: 10,
  dots: false,
  items: 1,
  autoplay: true,
};

function MainPageCarousel() {
  return (
    <div>
      <div className="carousel">
        <div className="container-fluid">
          <OwlCarousel className="owl-carousel owl-theme" {...options}>
            {carouselData &&
              carouselData.map((carouseldata) => (
                <div className="carousel-item" key={carouseldata.CarouselID}>
                  <div className="carousel-img">
                    <img
                      src={"images/Carousel/" + carouseldata.CarouselImage}
                      alt={carouseldata.CarouselTitle}
                    />
                  </div>
                  <div className="carousel-text">
                    <h1
                      dangerouslySetInnerHTML={{
                        __html: carouseldata.CarouselTitle,
                      }}
                    ></h1>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: carouseldata.CarouselSub,
                      }}
                    />
                    <div className="carousel-btn">
                      <a className="btn custom-btn" href="">
                        {carouseldata.CarouselButtonAitem}
                      </a>
                      <a className="btn custom-btn" href="">
                        {carouseldata.CarouselButtonBitem}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}

export default MainPageCarousel;
