import React from 'react'
import HeaderInner from './HeaderInner'
import ScrollToTop from './ScrollToTop';
import OffCanvasMenu from './OffCanvasMenu';
import FooterCta from '../sections/FooterCta';
import Footer from './Footer';

const MainLayoutInner = ({ children }) => {
  return (
    <>
      <HeaderInner />
      <OffCanvasMenu/>
      {children}
      <ScrollToTop/>
      <FooterCta/>
      <Footer/>
    </>
  );
}

export default MainLayoutInner