import React from 'react'
import BannerArea from '../sections/BannerArea';
import ServiceArea from '../sections/ServiceArea';
import WhyChooseUs from '../sections/WhyChooseUs';
import Pricing from '../sections/Pricing';

const HomePage = () => {
  return (
    <>
      <main className="home-3__background overflow-hidden">
        <BannerArea />
        <ServiceArea />
        <WhyChooseUs/>
        <Pricing/>
      </main>
    </>
  );
}

export default HomePage