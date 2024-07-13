import React from 'react'

import whycus1 from "@/public/imgs/why-choose-us/why-choose-us-shap-2.png";

const WhyChooseUs = () => {
  return (
    <>
      <section className="why-choose-us">
        <div className="why-choose-us__shap">
          <img
            src="/imgs/why-choose-us/why-choose-us-shap-2.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-4">
              <div className="why-choose-us__content">
                <div className="section__title-wrapper mb-10">
                  <h5 className="section__subtitle color-theme-primary mb-15 mb-xs-10 title-animation">
                    <img
                      src="/imgs/ask-quesiton/heart.png"
                      alt="icon not found"
                      className="img-fluid"
                    />
                    Why Choose Us
                  </h5>
                  <h2 className="section__title mb-0 text-capitalize title-animation">
                    Embrace Wellness Your Gateway{" "}
                  </h2>
                </div>
                <p className="mb-40">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet rcus nunc. Duis egestas ante sed tincidunt Making the
                  world talk about you
                </p>
                <a
                  href="about-us.html"
                  className="rr-btn position-relative overflow-hidden"
                >
                  <div className="panel wow" />
                  <span className="btn-wrap">
                    <span className="text-one">
                      Read More <i className="fa-solid fa-plus" />
                    </span>
                    <span className="text-two">
                      Read More <i className="fa-solid fa-plus" />
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="why-choose-us__wrapper">
                <div className="why-choose-us__wrapper-media">
                  <div className="why-choose-us__wrapper-media-shap">
                    <img
                      src="/imgs/why-choose-us/why-choose-us-shap.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <img
                    src="/imgs/why-choose-us/why-choose-us.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <ul className="why-choose-us__wrapper-list">
                  <li>
                    <i className="fa-solid fa-check" />
                    Harmonize Services
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    ThriveTrail Services
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Resilience Wellness
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Waves Solutions
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Voyage Wellness
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Health Solutions
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Wellness Services
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Oasis Healthcare
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChooseUs