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
            <li>
              <a href="about-us.html">About us</a>
            </li>
            <li>
              <a href="appoinment.html">Appointment</a>
            </li>
            <li>
              <a href="service.html">Service</a>
            </li>
            <li>
              <a href="faq.html">FAQ</a>
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