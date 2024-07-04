import React from 'react'
const AboutUs = () => {
  return (
    <>
      <section className="about-us-3 about-us-3__space overflow-hidden">
        <div className="container">
          <div className="about-us-3__background">
            <div
              className="about-us-3__shap"
              data-background="/imgs/about-us-3/about-shap.png"
            />
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-us-3__content">
                <div className="section__title-wrapper mb-30">
                  <h5 className="section__subtitle color-theme-primary mb-15 mb-xs-10 title-animation">
                    <img
                      src="/imgs/ask-quesiton/heart.png"
                      alt="icon not found"
                      className="img-fluid"
                    />
                    About Us
                  </h5>
                  <h2 className="section__title mb-20 text-capitalize title-animation">
                    Harbor Health Anchored in Care and Commitment
                  </h2>
                  <p className="mb-30">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sit amet rcus nunc. Duis egestas ac ante sed tincidunt.
                  </p>
                </div>
                <ul className="about-us-3__content__list">
                  <li>
                    <i className="fa-solid fa-circle-check" />{" "}
                    <h5>
                      Redefining Care, Restoring Hope Your Health, Our Passion
                    </h5>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />{" "}
                    <h5>Compassion in Care, Healing in Action</h5>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" />{" "}
                    <h5>Healthcare Excellence, Compassionate Healing</h5>
                  </li>
                </ul>
                <div className="about-us-3__content-btn d-flex align-items-center mt-35">
                  <div className="about-us-3__content-btn__icon">
                    <i className="fa-solid fa-phone" />
                  </div>
                  <div className="about-us-3__content-btn__text">
                    <p className="mb-0 color-white">Requesting A Call:</p>
                    <h5 className="mb-0 color-white">
                      <a href="tel:6295550129">(629) 555-0129</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-us-3__media">
                <img
                  src="/imgs/about-us-3/about-us-3.png"
                  className="img-fluid"
                  alt="img not found"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs