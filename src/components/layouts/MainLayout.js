import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop';
import OffCanvasMenu from './OffCanvasMenu';
import FooterCta from '../sections/FooterCta';

const MainLayout = ({ children }) => {
  return (
    <div data-testid="main-layout">
      <Header/>
      <OffCanvasMenu />
      {children}
      <ScrollToTop />
      <FooterCta />
      <Footer />
    </div>
  );
};

export default MainLayout