"use client"
import React from 'react'
import Navigation from './Navigation';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header>
        <div id="header-sticky" className="header__area header-1">
          <div className="container">
            <div className="mega__menu-wrapper p-relative">
              <div className="header__main">
                <div className="header__logo">
                  <Link href="/">
                    <div className="logo">
                      <img
                        src="/imgs/logo/st-lukes-logo-header.svg"
                        alt="logo not found"
                      ></img>
                    </div>
                  </Link>
                </div>
                <div className="mean__menu-wrapper d-none d-lg-block">
                  <Navigation />
                </div>
                <div className="header__right">
                  <div className="header__action d-flex align-items-center">
                    <div className="header__btn-wrap d-none d-sm-inline-flex">
                      <a href="contact.html" className="rr-btn rr-btn__primary">
                        <span className="btn-wrap">
                          <span className="text-one">
                            Read More <i className="fa-solid fa-plus" />
                          </span>
                          <span className="text-two">
                            Read More <i className="fa-solid fa-plus" />
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="header__hamburger ml-20 d-xl-none">
                      <div className="sidebar__toggle">
                        <a
                          className="bar-icon"
                          //href="javascript:void(0)"
                          onClick={(e) => e.preventDefault()}
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
}

export default Header