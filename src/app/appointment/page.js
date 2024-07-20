import Breadcrumb from '@/components/layouts/Breadcrumb'
import MainLayoutInner from '@/components/layouts/MainLayoutInner'
import BrandArea from '@/components/sections/BrandArea';
import TakeAppointment from '@/components/sections/TakeAppointment';
import React from 'react'

const AppointmenPage = () => {
  return (
    <>
      <MainLayoutInner>
        <Breadcrumb breadcrumbTitle="Appointment"/>
        <TakeAppointment/>
        <BrandArea/>
      </MainLayoutInner>
    </>
  );
}

export default AppointmenPage