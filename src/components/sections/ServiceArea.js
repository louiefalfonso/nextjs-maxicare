import React from "react";

const ServiceArea = () => {
  return (
    <>
      <section className="service-2 section-space">
        <div className="container">
          <div className="row mb-60 mb-xs-50 align-items-lg-end align-items-center">
            <div className="col-lg-6">
              <div className="section__title-wrapper mb-md-30 mb-mb-30 mb-xs-30">
                <h5 className="section__subtitle color-theme-primary mb-15 mb-xs-10 title-animation">
                  <img
                    src="/imgs/ask-quesiton/heart.png"
                    alt="icon not found"
                    className="img-fluid"
                  />{" "}
                  Our Services
                </h5>
                <h2 className="section__title mb-0 text-capitalize title-animation">
                  Harbor Health Anchored in Care and Commitment
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-2__slider__arrow d-flex justify-content-lg-end justify-content-start">
                <button className="service-2__slider__arrow-prev d-flex align-items-center justify-content-center">
                  <i className="fa-solid fa-arrow-left" />
                </button>
                <button className="service-2__slider__arrow-next d-flex align-items-center justify-content-center">
                  <i className="fa-solid fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="swiper service-2__slider mb-minus-60">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="service-2__item">
                      <a
                        href="service-details.html"
                        className="service-2__item-media"
                      >
                        <img
                          className="img-fluid"
                          src="/imgs/service-2/service-1.jpg"
                          alt="image not found"
                        />
                      </a>
                      <div className="service-2__item-content">
                        <h4 className="mb-20 mb-xs-15 d-flex align-items-start">
                          <a href="blog-details.html">
                            <img
                              className="img-fluid mr-15"
                              src="/imgs/service-2/service-icon-1.png"
                              alt="icon not found"
                            />
                            InspireHealth Hub
                          </a>
                        </h4>
                        <ul>
                          <li>Your digital marketing sources</li>
                          <li>Showing the world who you are</li>
                          <li>Making the world talk about you</li>
                        </ul>
                        <a
                          className="rr-a-btn mt-30 mt-xs-25 d-block"
                          href="blog-details.html"
                        >
                          Read More <i className="fa-solid fa-circle-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="service-2__item">
                      <a
                        href="service-details.html"
                        className="service-2__item-media"
                      >
                        <img
                          className="img-fluid"
                          src="/imgs/service-2/service-2.jpg"
                          alt="image not found"
                        />
                      </a>
                      <div className="service-2__item-content">
                        <h4 className="mb-20 mb-xs-15 d-flex align-items-start">
                          <a href="blog-details.html">
                            <img
                              className="img-fluid mr-15"
                              src="/imgs/service-2/service-icon-2.png"
                              alt="icon not found"
                            />
                            Wellness Solutions
                          </a>
                        </h4>
                        <ul>
                          <li>Your digital marketing sources</li>
                          <li>Showing the world who you are</li>
                          <li>Making the world talk about you</li>
                        </ul>
                        <a
                          className="rr-a-btn mt-30 mt-xs-25 d-block"
                          href="blog-details.html"
                        >
                          Read More <i className="fa-solid fa-circle-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="service-2__item">
                      <a
                        href="service-details.html"
                        className="service-2__item-media"
                      >
                        <img
                          className="img-fluid"
                          src="/imgs/service-2/service-3.jpg"
                          alt="image not found"
                        />
                      </a>
                      <div className="service-2__item-content">
                        <h4 className="mb-20 mb-xs-15 d-flex align-items-start">
                          <a href="blog-details.html">
                            <img
                              className="img-fluid mr-15"
                              src="/imgs/service-2/service-icon-3.png"
                              alt="icon not found"
                            />
                            Healing Healthcare
                          </a>
                        </h4>
                        <ul>
                          <li>Your digital marketing sources</li>
                          <li>Showing the world who you are</li>
                          <li>Making the world talk about you</li>
                        </ul>
                        <a
                          className="rr-a-btn mt-30 mt-xs-25 d-block"
                          href="blog-details.html"
                        >
                          Read More <i className="fa-solid fa-circle-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceArea