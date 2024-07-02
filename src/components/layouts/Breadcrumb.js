import React from 'react'

const Breadcrumb = ({ breadcrumbTitle }) => {
  return (
    <>
      <div class="breadcrumb__area header__background-color breadcrumb__header-up breadcrumb-space overly overflow-hidden">
        <div
          class="breadcrumb__background"
          data-background="./assets/imgs/breadcrumb/page-header-1.png"
        ></div>
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-12">
              <div class="breadcrumb__content text-center">
                <h2 class="breadcrumb__title mb-15 mb-sm-10 mb-xs-5 color-white title-animation">
                  {breadcrumbTitle}
                </h2>

                <div class="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li>
                        <span>
                          <a href="index.html">Home</a>
                        </span>
                      </li>
                      <li class="active">
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

export default Breadcrumb