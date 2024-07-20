import React from 'react'

const FooterCta = () => {
  return (
    <div data-testid="main-footercta">
      <section className="footer__cta footer__cta-bottom-up">
        <div className="container">
          <div className="row mb-minus-30">
            <div className="col-md-6">
              <div className="footer__cta-item mb-30 theme-bg-primary d-flex flex-lg-row flex-column align-items-lg-center">
                <div className="footer__cta-item-icon d-flex align-items-center justify-content-center">
                  <img
                    className="img-fluid"
                    src="/imgs/footer__cta/footer__cta-item-1.png"
                    alt="icon not found"
                  />
                </div>
                <div className="footer__cta-item-text">
                  <h4 className="color-white mb-15 mb-10">Expert Health Care</h4>
                  <p className="color-white mb-0">
                    Et purus duis sollicitudin dignissim habitant. Egestas nulla
                    quis venenatis cras sed eu massa eu faucibus
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer__cta-item mb-30 theme-bg-glow d-flex flex-lg-row flex-column align-items-lg-center">
                <div className="footer__cta-item-icon d-flex align-items-center justify-content-center">
                  <img
                    className="img-fluid"
                    src="/imgs/footer__cta/footer__cta-item-2.png"
                    alt="icon not found"
                  />
                </div>
                <div className="footer__cta-item-text">
                  <h4 className="color-white mb-15 mb-10">
                    Exellent Health Provider
                  </h4>
                  <p className="color-white mb-0">
                    Et purus duis sollicitudin dignissim habitant. Egestas nulla
                    quis venenatis cras sed eu massa eu faucibus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FooterCta