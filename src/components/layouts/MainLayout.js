import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop';
import OffCanvasMenu from './OffCanvasMenu';
import FooterCta from '../sections/FooterCta';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <OffCanvasMenu />
      {children}
      <ScrollToTop />
      <FooterCta />
      <Footer />
    </>
  );
};

export default MainLayout