import React from 'react'

const Navigation = () => {
  return (
    <>
      <div className="main-menu">
        <nav id="mobile-menu">
          <ul>
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li className="has-dropdown ">
              <a href="#">Pages</a>
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