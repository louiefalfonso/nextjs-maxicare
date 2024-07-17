import React from "react";

const Breadcrumb = ({ breadcrumbTitle }) => {
  return (
    <>
      <div className="breadcrumb__area header__background-color breadcrumb__header-up breadcrumb-space overly overflow-hidden">
        <div
          className="breadcrumb__background"
          data-background="/imgs/breadcrumb/page-header-1.png"
        />
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12">
              <div className="breadcrumb__content text-center">
                <h2 className="breadcrumb__title mb-15 mb-sm-10 mb-xs-5 color-white title-animation">
                  {breadcrumbTitle}
                </h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li>
                        <span>
                          <a href="index.html">Home</a>
                        </span>
                      </li>
                      <li className="active">
                        <span>{breadcrumbTitle}</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
