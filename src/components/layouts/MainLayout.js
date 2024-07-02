import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop';
import OffCanvasMenu from './OffCanvasMenu';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <OffCanvasMenu/>
      {children}
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default MainLayout