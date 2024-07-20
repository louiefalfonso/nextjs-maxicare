import React from 'react'

const TakeAppointment = () => {
  return (
    <>
      <section className="take-appointment-3 section-space__top section-space__bottom-70 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__title-wrapper take-appointment-3__content text-center mb-60 mb-sm-50 mb-xs-40">
                <h5 className="section__subtitle color-theme-primary mb-15 mb-xs-10 title-animation">
                  <img
                    src="/imgs/ask-quesiton/heart.png"
                    alt="icon not found"
                    className="img-fluid"
                  />{" "}
                  Take Appointment
                </h5>
                <h2 className="section__title mb-20 mb-xs-15 title-animation">
                  Elevating Business with Technology
                </h2>
                <p className="mb-0">
                  Medical science encompasses a vast array of fields dedicated
                  to understanding and treating ailments, promoting health, and
                  enhanci quality of life. Here's a brief exploration into this
                  multifaceted domain medical{" "}
                </p>
              </div>
              <div className="take-appointment-3__form">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="take-appointment-3__form-input">
                      <label htmlFor="name">Your name</label>
                      <div className="input-wrapper">
                        <input
                          name="name"
                          id="name"
                          type="text"
                          placeholder="Your name..."
                        />
                        <i className="fa-solid fa-user" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="take-appointment-3__form-input">
                      <label htmlFor="phone">Your Phone</label>
                      <div className="input-wrapper">
                        <input
                          name="phone"
                          id="phone"
                          type="text"
                          placeholder="Your phone..."
                        />
                        <i className="fa-solid fa-phone" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="take-appointment-3__form-input">
                      <label htmlFor="phone">health type</label>
                      <div className="take-appointment-3__form-input-select">
                        <select id="health">
                          <option>Choose one...</option>
                          <option>Good</option>
                          <option>Very Good</option>
                          <option>Week</option>
                          <option>Very Week</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="take-appointment-3__form-input">
                      <label htmlFor="email">Your Email</label>
                      <div className="input-wrapper">
                        <input
                          name="email"
                          id="email"
                          type="text"
                          placeholder="Your email..."
                        />
                        <i className="fa-solid fa-paper-plane" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="take-appointment-3__form-input">
                      <label htmlFor="phone">Select doctor</label>
                      <div className="take-appointment-3__form-input-select">
                        <select id="doctor">
                          <option>Your doctor...</option>
                          <option>Dr. Paul</option>
                          <option>Dr. Sabbir</option>
                          <option>Dr. Rubel</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="take-appointment-3__form-input">
                      <label htmlFor="datepicker">Select Date</label>
                      <div className="input-wrapper">
                        <input
                          id="datepicker"
                          name="date"
                          type="text"
                          placeholder="YY/MM/DD"
                        />
                        <i className="fa-solid fa-calendar-days" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="rr-btn rr-btn__primary-color mt-0"
                    >
                      <span className="btn-wrap">
                        <span className="text-one">Appointment now</span>
                        <span className="text-two">Appointment now</span>
                      </span>
                    </button>
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

export default TakeAppointment