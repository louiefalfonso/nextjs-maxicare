import React from 'react'

const Navigation = () => {
  return (
    <>
      <div className="main-menu">
        <nav id="mobile-menu">
          <ul>
            <li className="has-dropdown has-mega-menu active">
              <a href="javascript:void(0)">Home</a>
              <ul className="mega-menu mega-menu-grid-3">
                <li>
                  <div className="home__menu-item">
                    <div className="home__menu-thumb">
                      <img
                        src="assets/imgs/menu/menu-home-1.jpg"
                        alt="thumb not found"
                      />
                      <div className="home__menu-buttons">
                        <a href="index.html" className="rr-btn">
                          <span className="btn-wrap">
                            <span className="text-one">
                              MULTI PAGE <i className="fa-solid fa-plus" />
                            </span>
                            <span className="text-two">
                              MULTI PAGE <i className="fa-solid fa-plus" />
                            </span>
                          </span>
                        </a>
                        <a href="index-one-page.html" className="rr-btn">
                          <span className="btn-wrap">
                            <span className="text-one">
                              ONE PAGE <i className="fa-solid fa-plus" />
                            </span>
                            <span className="text-two">
                              ONE PAGE <i className="fa-solid fa-plus" />
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h4 className="home__menu-title">Eye Care</h4>
                  </div>
                </li>
                <li>
                  <div className="home__menu-item">
                    <div className="home__menu-thumb">
                      <img
                        src="assets/imgs/menu/menu-home-2.jpg"
                        alt="thumb not found"
                      />
                      <div className="home__menu-buttons">
                        <a href="index-2.html" className="rr-btn">
                          <span className="btn-wrap">
                            <span className="text-one">
                              MULTI PAGE <i className="fa-solid fa-plus" />
                            </span>
                            <span className="text-two">
                              MULTI PAGE <i className="fa-solid fa-plus" />
                            </span>
                          </span>
                        </a>
                        <a href="index-2-one-page.html" className="rr-btn">
                          <span className="btn-wrap">
                            <span className="text-one">
                              ONE PAGE <i className="fa-solid fa-plus" />
                            </span>
                            <span className="text-two">
                              ONE PAGE <i className="fa-solid fa-plus" />
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h4 className="home__menu-title">Dental Care</h4>
                  </div>
                </li>
                <li>
                  <div className="home__menu-item">
                    <div className="home__menu-thumb">
                      <img
                        src="assets/imgs/menu/menu-home-3.jpg"
                        alt="thumb not found"
                      />
                      <div className="home__menu-buttons">
                        <a href="index-3.html" className="rr-btn">
                          <span className="btn-wrap">
                            <span className="text-one">
                              MULTI PAGE <i className="fa-solid fa-plus" />
                            </span>
                            <span className="text-two">
                              MULTI PAGE <i className="fa-solid fa-plus" />
                            </span>
                          </span>
                        </a>
                        <a href="index-3-one-page.html" className="rr-btn">
                          <span className="btn-wrap">
                            <span className="text-one">
                              ONE PAGE <i className="fa-solid fa-plus" />
                            </span>
                            <span className="text-two">
                              ONE PAGE <i className="fa-solid fa-plus" />
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <h4 className="home__menu-title">Medical Care</h4>
                  </div>
                </li>
              </ul>
            </li>
            <li className="has-dropdown ">
              <a href="javascript:void(0)">Pages</a>
              <ul className="submenu">
                <li>
                  <a href="faq.html">Faq</a>
                </li>
                <li>
                  <a href="about-us.html">About us</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="404.html">404 Page</a>
                </li>
                <li>
                  <a href="appoinment.html">Appointment</a>
                </li>
              </ul>
            </li>
            <li className="has-dropdown">
              <a href="service.html">Services</a>
              <ul className="submenu">
                <li>
                  <a href="service.html">Service</a>
                </li>
                <li>
                  <a href="service-details.html">Services Details</a>
                </li>
              </ul>
            </li>
            <li className="has-dropdown">
              <a href="doctor.html">Doctor</a>
              <ul className="submenu">
                <li>
                  <a href="doctor.html">Doctor</a>
                </li>
                <li>
                  <a href="doctor-details.html">Doctor Details</a>
                </li>
              </ul>
            </li>
            <li className="has-dropdown">
              <a href="portfolio.html">Portfolio</a>
              <ul className="submenu">
                <li>
                  <a href="portfolio.html">Portfolio</a>
                </li>
                <li>
                  <a href="portfolio-details.html">Portfolio Details</a>
                </li>
              </ul>
            </li>
            <li className="has-dropdown">
              <a href="blog.html">Blog</a>
              <ul className="submenu">
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="blog-details.html">Blog Details</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navigation