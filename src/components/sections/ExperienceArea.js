import React from 'react'

const ExperienceArea = () => {
  return (
    <>
      <section className="experience-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="experience-2__box experience-2__bottom-up d-flex flex-wrap justify-content-between theme-bg-primary">
                <div className="experience-2__item d-flex flex-wrap align-items-center">
                  <div className="experience-2__item-icon">
                    <img
                      className="img-fluid"
                      src="assets/imgs/experience-2/experience-2__item-1.png"
                      alt="icon not found"
                    />
                  </div>
                  <div className="experience-2__item-text">
                    <h2 className="color-white">
                      <span className="odometer" data-count={200}>
                        0
                      </span>
                      +
                    </h2>
                    <p className="mb-0 text-uppercase color-white">
                      HAPPY PATIENTS
                    </p>
                  </div>
                </div>
                <div className="experience-2__item d-flex flex-wrap align-items-center">
                  <div className="experience-2__item-icon">
                    <img
                      className="img-fluid"
                      src="assets/imgs/experience-2/experience-2__item-2.png"
                      alt="icon not found"
                    />
                  </div>
                  <div className="experience-2__item-text">
                    <h2 className="color-white">
                      <span className="odometer" data-count={20}>
                        0
                      </span>
                      +
                    </h2>
                    <p className="mb-0 text-uppercase color-white">
                      SAVED HEARTS
                    </p>
                  </div>
                </div>
                <div className="experience-2__item d-flex flex-wrap align-items-center">
                  <div className="experience-2__item-icon">
                    <img
                      className="img-fluid"
                      src="assets/imgs/experience-2/experience-2__item-3.png"
                      alt="icon not found"
                    />
                  </div>
                  <div className="experience-2__item-text">
                    <h2 className="color-white">
                      <span className="odometer" data-count={10}>
                        0
                      </span>
                      K+
                    </h2>
                    <p className="mb-0 text-uppercase color-white">
                      EXPERT DOCTORS
                    </p>
                  </div>
                </div>
                <div className="experience-2__item d-flex flex-wrap align-items-center">
                  <div className="experience-2__item-icon">
                    <img
                      className="img-fluid"
                      src="assets/imgs/experience-2/experience-2__item-4.png"
                      alt="icon not found"
                    />
                  </div>
                  <div className="experience-2__item-text">
                    <h2 className="color-white">
                      <span className="odometer" data-count={900}>
                        0
                      </span>
                      +
                    </h2>
                    <p className="mb-0 text-uppercase color-white">
                      SERENITY WORK
                    </p>
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

export default ExperienceArea