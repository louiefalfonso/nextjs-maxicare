import Breadcrumb from '@/components/layouts/Breadcrumb'
import MainLayoutInner from '@/components/layouts/MainLayoutInner'
import FaqArea from '@/components/sections/FaqArea';
import PricingAppointment from '@/components/sections/PricingAppointment';
import React from 'react'

const FaqPage = () => {
  return (
    <>
      <MainLayoutInner>
        <Breadcrumb breadcrumbTitle="FAQ" />
        <FaqArea/>
        <PricingAppointment/>
      </MainLayoutInner>
    </>
  );
}

export default FaqPage