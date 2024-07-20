"use client";
import React from "react";
import Navigation from "./Navigation";
import Link from "next/link";

const HeaderInner = () => {
  return (
    <>
      <header>
        <div className="header-4-top theme-bg-primary">
          <div className="container">
            <div className="row">
              <div className="col-10 col-lg-10 d-none d-lg-block">
                <div className="header-4-top__menu d-flex">
                  <a href="">
                    <i className="fa-solid fa-location-dot" /> Rizal Drive cor.
                    32nd St. and 5th Ave., Taguig, 1634
                  </a>
                  <a href="">
                    <i className="fa-solid fa-phone" /> +63-2-8789-7700
                  </a>
                  <a href="">
                    <i className="fa-solid fa-envelope" />{" "}
                    customer.bgc@stlukes.com.ph
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-2 d-none d-lg-block">
                <div className="header-4-top__menu-social d-flex justify-content-lg-end justify-content-center">
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://www.instagram.com/">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a href="https://twitter.com/">
                    <svg
                      width={17}
                      height={16}
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0596 6.77295L15.8879 -0.00195312H14.5068L9.44607 5.8806L5.40411 -0.00195312H0.742188L6.85442 8.89352L0.742188 15.998H2.12338L7.4676 9.78587L11.7362 15.998H16.3981L10.0593 6.77295H10.0596ZM8.16787 8.97189L7.54857 8.0861L2.62104 1.03779H4.74248L8.71905 6.726L9.33834 7.61179L14.5074 15.0056H12.386L8.16787 8.97223V8.97189Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i className="fa-brands fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="header-sticky"
          className="header__area header-4__background header-4"
        >
          <div className="container">
            <div className="mega__menu-wrapper p-relative">
              <div className="header__main">
                <div className="header__logo">
                  <Link href="/">
                    <div className="logo">
                      <img
                        src="/imgs/logo/st-lukes-logo-header.svg"
                        alt="logo not found"
                      />
                    </div>
                  </Link>
                </div>
                <div className="mean__menu-wrapper d-none d-lg-block">
                  <Navigation />
                </div>
                <div className="header__right">
                  <div className="header__action d-flex align-items-center">
                    <div className="header__hamburger">
                      <div className="sidebar__toggle">
                        <a
                          className="bar-icon"
                          onClick={(e) => e.preventDefault()}
                          //href="javascript:void(0)"
                        >
                          <span />
                          <span />
                          <span />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderInner;
