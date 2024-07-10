import React from 'react'

const LatestWork = () => {
  return (
    <>
      <section className="latest-work">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__title-wrapper latest-work__content text-center mb-60 mb-xs-40">
                <h5 className="section__subtitle color-theme-primary mb-15 mb-xs-10 title-animation">
                  <img
                    src="/imgs/ask-quesiton/heart.png"
                    alt="icon not found"
                    className="img-fluid"
                  />
                  Latest Work
                </h5>
                <h2 className="section__title text-capitalize mb-0 title-animation">
                  Medical treatments encompass a spectrum
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper latest-work__slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="latest-work__item">
                <div className="latest-work__item-media">
                  <img
                    className="img-fluid"
                    src="/imgs/latest-work/latest-work-2.png"
                    alt="image not found"
                  />
                </div>
                <div className="latest-work__item-hover">
                  <h4 className="mb-10">
                    <a href="portfolio-details.html">healthcare provide</a>
                  </h4>
                  <p className="mb-0">Blood Pressure</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="latest-work__item">
                <div className="latest-work__item-media">
                  <img
                    className="img-fluid"
                    src="/imgs/latest-work/latest-work-1.png"
                    alt="image not found"
                  />
                </div>
                <div className="latest-work__item-hover">
                  <h4 className="mb-10">
                    <a href="portfolio-details.html">healthcare provide</a>
                  </h4>
                  <p className="mb-0">Blood Pressure</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="latest-work__item">
                <div className="latest-work__item-media">
                  <img
                    className="img-fluid"
                    src="/imgs/latest-work/latest-work-3.png"
                    alt="image not found"
                  />
                </div>
                <div className="latest-work__item-hover">
                  <h4 className="mb-10">
                    <a href="portfolio-details.html">healthcare provide</a>
                  </h4>
                  <p className="mb-0">Blood Pressure</p>
                </div>
              </div>
            </div>
          </div>
          <div className="latest-work__slider-dot mt-80" />
        </div>
      </section>
    </>
  );
}

export default LatestWork