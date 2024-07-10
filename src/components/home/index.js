import React from 'react'
import BannerArea from '../sections/BannerArea';
import ServiceArea from '../sections/ServiceArea';
import WhyChooseUs from '../sections/WhyChooseUs';
import Pricing from '../sections/Pricing';
import AboutUs from '../sections/AboutUs';
import BrandArea from '../sections/BrandArea';
import Specialist from '../sections/Specialist';
import ExperienceArea from '../sections/ExperienceArea';
import LatestWork from '../sections/LatestWork';
import ServicesArea from '../sections/ServicesArea';

const HomePage = () => {
  return (
    <>
      <main className="home-3__background overflow-hidden">
        <BannerArea />
        <ServiceArea />
        <WhyChooseUs/>
        <Pricing/>
        <AboutUs/>
        <BrandArea/>
        <Specialist/>
        <LatestWork/>
        <ServicesArea/>
      </main>
    </>
  );
}

export default HomePage