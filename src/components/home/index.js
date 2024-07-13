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
import ClientTestimonial from '../sections/ClientTestimonial';
import SliderTextArea from '../sections/SliderTextArea';
import BlogArea from '../sections/BlogArea';

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
        <ClientTestimonial/>
        <SliderTextArea/>
        <BlogArea/>
      </main>
    </>
  );
}

export default HomePage