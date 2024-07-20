import Breadcrumb from '@/components/layouts/Breadcrumb'
import MainLayoutInner from '@/components/layouts/MainLayoutInner'
import Pricing from '@/components/sections/Pricing';
import PricingAppointment from '@/components/sections/PricingAppointment';
import React from 'react'

const PricingPage = () => {
  return (
    <>
      <MainLayoutInner>
        <Breadcrumb breadcrumbTitle="Pricing Plans" />
        <Pricing/>
        <PricingAppointment/>
      </MainLayoutInner>
    </>
  );
}

export default PricingPage