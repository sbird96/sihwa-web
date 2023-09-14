var $ = require("jquery");

if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

// Data API
import goodsData from "../assets/GoodsData.json";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const OwlOptions = {
  loop: true,
  margin: 10,
  items: 3,
  autoplay: true,
  //responsive setting
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
};

export default function MainPageGoods() {
  return (
    <>
      <div className="goods">
        <div className="container">
          <OwlCarousel className="owl-theme goods-carousel" {...OwlOptions}>
            {goodsData &&
              goodsData.map((goodsdata) => (
                <div className="goods-item" key={goodsdata.GoodsID}>
                  <div className="goods-img">
                    <img
                      src={"images/Goods/" + goodsdata.GoodsImage}
                      alt={goodsdata.GoodsTitle}
                    />
                  </div>
                  <p
                    dangerouslySetInnerHTML={{ __html: goodsdata.GoodsContent }}
                  ></p>
                  <h2>{goodsdata.GoodsTitle}</h2>
                  <h3>{goodsdata.GoodsSubtitle}</h3>
                </div>
              ))}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}
