import React from 'react'

const BrandArea = () => {
  return (
    <>
      <div className="brand__area section-space">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="swiper brand__active">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="brand__item text-center">
                      <div className="brand__thumb">
                        <img
                          className="img-fluid"
                          src="/imgs/brand/brand-1.png"
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand__item text-center">
                      <div className="brand__thumb">
                        <img
                          className="img-fluid"
                          src="/imgs/brand/brand-2.png"
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand__item text-center">
                      <div className="brand__thumb">
                        <img
                          className="img-fluid"
                          src="/imgs/brand/brand-3.png"
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand__item text-center">
                      <div className="brand__thumb">
                        <img
                          className="img-fluid"
                          src="/imgs/brand/brand-4.png"
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="brand__item text-center">
                      <div className="brand__thumb">
                        <img
                          className="img-fluid"
                          src="/imgs/brand/brand-5.png"
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandArea