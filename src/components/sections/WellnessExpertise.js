import React from 'react'

const WellnessExpertise = () => {
  return (
    <>
      <section className="wellness-expertise section-space__bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="wellness-expertise__content">
                <h2 className="section__title mb-15 mb-xs-10  title-animation">
                  Revitalize Radiance Your Wellness Expertise
                </h2>
                <p className="mb-40 mb-xs-30">
                  Lorem ipsum dolor sit amet, consectetur adipiLorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc.
                  Duis egestas ac ante sed tincidunt. Lorem ipsum dolor sit
                  ametscing elit. Sed sit amet
                </p>
                <ul className="wellness-expertise__content__list">
                  <li>
                    <i className="fa-solid fa-check" />
                    Mistakes To Avoid
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Knew About Fonts
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Your Startup
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Knew About Fonts
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="wellness-expertise__media">
                <img
                  src="/imgs/wellness-expertise/wellness-expertise.png"
                  className="img-fluid"
                  alt="image not found"
                />
                <div className="wellness-expertise__media__box">
                  <div className="wellness-expertise__media__box-icon">
                    <img
                      className="img-fluid"
                      src="/imgs/wellness-expertise/note.svg"
                      alt="icon not found"
                    />
                  </div>
                  <div className="wellness-expertise__media__box-text">
                    <h3>
                      <span className="odometer" data-count={380}>
                        0
                      </span>
                      +
                    </h3>
                    <h6>Success Case</h6>
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

export default WellnessExpertise