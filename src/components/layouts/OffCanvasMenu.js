import React from 'react'

const OffCanvasMenu = () => {
  return (
    <>
      <div className="fix">
        <div className="offcanvas__area">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <a href="index.html">
                    <img
                      src="assets/imgs/logo/logo-white.svg"
                      alt="logo not found"
                    />
                  </a>
                </div>
                <div className="offcanvas__close">
                  <button className="offcanvas-close-icon animation--flip">
                    <span className="offcanvas-m-lines">
                      <span className="offcanvas-m-line line--1" />
                      <span className="offcanvas-m-line line--2" />
                      <span className="offcanvas-m-line line--3" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="mobile-menu fix" />
              <div className="offcanvas__social">
                <h4 className="offcanvas__title mb-20">
                  Subscribe &amp; Follow
                </h4>
                <p className="mb-30">
                  Medical practices evolved over millennia, from ancient
                  civilizations like Egypt and Mesopotamia to the groundbreaking
                </p>
                <ul className="header-top-socail-menu d-flex">
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/">
                      <i className="fa-brands fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a href="https://vimeo.com/">
                      <i className="fa-brands fa-vimeo-v" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="offcanvas__btn d-sm-none">
                <div className="header__btn-wrap">
                  <a
                    href="https://themeforest.net/user/rrdevs/portfolio"
                    className="rr-btn rr-btn__theme rr-btn__theme-white mt-40 mt-sm-35 mt-xs-30"
                  >
                    <span className="btn-wrap">
                      <span className="text-one">Purchase Now</span>
                      <span className="text-two">Purchase Now</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay" />
      <div className="offcanvas__overlay-white" />
    </>
  );
}

export default OffCanvasMenu