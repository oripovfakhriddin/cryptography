import { Fragment } from "react";
import Carousel from "react-multi-carousel";

import imageBunyod from "../../../assets/img/home/bunyod.jpg";
// import imageDamir from "../../../assets/img/home/damir.jpg";
import imageFakhriddin from "../../../assets/img/home/fakhriddin.jpg";
import imageSamandar from "../../../assets/img/home/keldibekov.jpg";
import imageSherzod from "../../../assets/img/home/sherzod.jpg";
import homeData from "../../../data/home/data";

import "./style.scss";

const PublicHomePage = () => {
  console.log(homeData[3]);

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1200,
      },
      items: 2,
      partialVisibilityGutter: 40,
    },
    smallDesktop: {
      breakpoint: {
        max: 1200,
        min: 850,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 850,
        min: 520,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: {
        max: 520,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <Fragment>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={5000}
        centerMode={false}
        className="ul__multi"
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        responsive={responsive}
        itemClass="item__category__card"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="user__box">
          <div className="user__img__box">
            <img src={imageSamandar} alt="Samandar" />
          </div>
          <div className="user__content__box">
            <h2>
              {homeData[0].firstName} {homeData[0].lastName}
            </h2>
            <p>Guruhi: {homeData[0].group}</p>
            <p>Yoshi: {homeData[0].age}</p>
            <p>{homeData[0].description}</p>
          </div>
        </div>

        <div className="user__box">
          <div className="user__img__box">
            <img src={imageSherzod} alt="Sherzod" />
          </div>
          <div className="user__content__box">
            <h2>
              {homeData[1].firstName} {homeData[1].lastName}
            </h2>
            <p>Guruhi: {homeData[1].group}</p>
            <p>Yoshi: {homeData[1].age}</p>
            <p>{homeData[1].description}</p>
          </div>
        </div>

        <div className="user__box">
          <div className="user__img__box">
            <img src={imageBunyod} alt="Damir" />
          </div>
          <div className="user__content__box">
            <h2>
              {homeData[2].firstName} {homeData[2].lastName}
            </h2>
            <p>Guruhi: {homeData[2].group}</p>
            <p>Yoshi: {homeData[2].age}</p>
            <p>{homeData[2].description}</p>
          </div>
        </div>

        <div className="user__box">
          <div className="user__img__box">
            <img src={imageFakhriddin} alt="Fakhriddin" />
          </div>
          <div className="user__content__box">
            <h2>
              {homeData[3].firstName} {homeData[3].lastName}
            </h2>
            <p>Guruhi: {homeData[3].group}</p>
            <p>Yoshi: {homeData[3].age}</p>
            <p>{homeData[3].description}</p>
          </div>
        </div>
      </Carousel>
    </Fragment>
  );
};

export default PublicHomePage;
