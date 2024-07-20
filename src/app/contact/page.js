import Breadcrumb from '@/components/layouts/Breadcrumb'
import MainLayoutInner from '@/components/layouts/MainLayoutInner'
import ContactMap from '@/components/sections/ContactMap';
import TakeAppointment from '@/components/sections/TakeAppointment';
import React from 'react'

const ContactPage = () => {
  return (
    <>
      <MainLayoutInner>
        <Breadcrumb breadcrumbTitle="Contact Us" />
        <TakeAppointment/>
        <ContactMap/>
      </MainLayoutInner>
    </>
  );
}

export default ContactPage