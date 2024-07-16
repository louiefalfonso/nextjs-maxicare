import Breadcrumb from '@/components/layouts/Breadcrumb'
import MainLayout from '@/components/layouts/MainLayout'
import AboutUsNew from '@/components/sections/AboutUsNew';
import BrandArea from '@/components/sections/BrandArea';
import ClientTestimonial from '@/components/sections/ClientTestimonial';
import ServiceArea3 from '@/components/sections/ServiceArea3';
import SliderTextArea from '@/components/sections/SliderTextArea';
import WellnessExpertise from '@/components/sections/WellnessExpertise';
import React from 'react'

const AboutUsPage = () => {
  return (
    <>
      <MainLayout>
        <Breadcrumb breadcrumbTitle ="About Us"/>
        <AboutUsNew/>
        <ServiceArea3/>
        <WellnessExpertise/>
        <SliderTextArea/>
        <ClientTestimonial/>
        <BrandArea/>
      </MainLayout>
    </>
  );
}

export default AboutUsPage