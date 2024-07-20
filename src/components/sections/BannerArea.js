import React from "react";
const BannerArea = () => {
  return (
    <div data-testid="bannerarea">
      <section className="banner-3 banner-3__space overflow-hidden">
        <div className="container">
          <div className="banner-3__shape" />
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="banner-3__content">
                <h1 className="mb-0 title-animation">
                  Epicenter of Health Your <span>Wellness Haven</span>
                </h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="banner-3__content mt-md-30 mt-sm-30 mt-xs-30">
                <p className="mb-0">
                  Et purus duis sollicitudin sed dign issim habEt purus duis
                  sollicitudin sed dign issim habi tant. Egestas nulla quis
                  venenatis Et purus i tant. Egestas nulla quis venenatis Et
                  purus{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper banner-3__slider mt-65 mt-xs-50">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="banner-3__item position-relative overflow-hidden">
                <div className="panel wow" />
                <div className="banner-3__item-media">
                  <img className="img-fluid" src="/imgs/banner-3/banner-1.png" alt="icon not found"></img>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="banner-3__item position-relative overflow-hidden">
                <div className="panel wow" />
                <div className="banner-3__item-media">
                  <img className="img-fluid" src="/imgs/banner-3/banner-2.png" alt="icon not found"></img>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="banner-3__item position-relative overflow-hidden">
                <div className="panel wow" />
                <div className="banner-3__item-media">
                  <img className="img-fluid" src="/imgs/banner-3/banner-3.png" alt="icon not found"></img>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-3__pagination" />
        </div>
      </section>
    </div>
  );
}

export default BannerArea