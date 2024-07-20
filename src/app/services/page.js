import Breadcrumb from '@/components/layouts/Breadcrumb'
import MainLayoutInner from '@/components/layouts/MainLayoutInner'
import ServiceArea from '@/components/sections/ServiceArea';
import ServicesArea4 from '@/components/sections/ServicesArea4';
import React from 'react'

const ServicePage = () => {
  return (
    <>
      <MainLayoutInner>
        <Breadcrumb breadcrumbTitle="Services" />
        <ServicesArea4/>
      </MainLayoutInner>
    </>
  );
}

export default ServicePage