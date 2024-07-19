import React from 'react'

const PricingAppointment = () => {
  return (
    <>
      <section className="pricing-appointment section-space__bottom">
        <div className="container">
          <div className="row align-items-end mb-60 mb-sm-50 mb-xs-40">
            <div className="col-lg-6">
              <div className="section__title-wrapper">
                <h5 className="section__subtitle color-theme-primary mb-15 mb-xs-10 title-animation">
                  <img
                    src="/imgs/ask-quesiton/heart.png"
                    alt="icon not found"
                    className="img-fluid"
                  />{" "}
                  Take Appointment
                </h5>
                <h2 className="section__title mb-0 title-animation">
                  Radiant Resilience Your Wellness Your Strength
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pricing-appointment__content-right mt-md-25 mt-sm-25 mt-xs-25">
                <p className="mb-0">
                  Medical science encompasses a vast array of fields dedicated
                  to understanding and treating ailments, promoting health, and
                  enhanci quality of life. Here's a brief exploration into this
                  multifaceted domain medical student company remain
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="pricing-appointment__contact-item__wrap d-flex flex-column">
                <div className="pricing-appointment__contact-item d-flex align-items-end">
                  <div className="pricing-appointment__contact-item-icon d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-phone" />
                  </div>
                  <div className="pricing-appointment__contact-item-text">
                    <p>Requesting A Call:</p>
                    <h5 className="mb-0">
                      <a href="tel:6295550129">(629) 555-0129</a>
                    </h5>
                  </div>
                </div>
                <div className="pricing-appointment__contact-item d-flex align-items-end">
                  <div className="pricing-appointment__contact-item-icon d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-clock" />
                  </div>
                  <div className="pricing-appointment__contact-item-text">
                    <p>Sunday - Friday:</p>
                    <h5 className="mb-0">9 am - 8 pm</h5>
                  </div>
                </div>
                <div className="pricing-appointment__contact-item d-flex align-items-end">
                  <div className="pricing-appointment__contact-item-icon d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-location-dot" />
                  </div>
                  <div className="pricing-appointment__contact-item-text">
                    <p>Taguig City</p>
                    <h5 className="mb-0">
                      Rizal Drive cor. 32nd St. and 5th Ave., Taguig, 1634
                    </h5>
                  </div>
                </div>
                <div className="pricing-appointment__contact-item d-flex align-items-end">
                  <div className="pricing-appointment__contact-item-icon d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-location-dot" />
                  </div>
                  <div className="pricing-appointment__contact-item-text">
                    <p>Quezon City</p>
                    <h5 className="mb-0">
                      279 E Rodriguez Sr. Ave. Quezon City, 1112
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <form
                id="pricing-appointment__form"
                method="POST"
                action="./mail.php"
                className="pricing-appointment__form mt-md-60 mt-sm-60 mt-xs-60"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="pricing-appointment__form-input">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="pricing-appointment__form-input">
                      <input
                        name="email"
                        id="email"
                        type="text"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="pricing-appointment__form-input">
                      <input
                        name="phone"
                        id="phone"
                        type="text"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="pricing-appointment__form-select">
                      <select name="doctor" id="doctor">
                        <option>Choose a Doctor</option>
                        <option>Dr. Rana</option>
                        <option>Dr. Sabbir</option>
                        <option>Dr. Rubel</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="pricing-appointment__form-input">
                      <textarea
                        name="textarea"
                        id="textarea"
                        placeholder="Messege"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="rr-btn rr-btn__primary-color mt-0"
                    >
                      <span className="btn-wrap">
                        <span className="text-one">Send Now</span>
                        <span className="text-two">Send Now</span>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PricingAppointment