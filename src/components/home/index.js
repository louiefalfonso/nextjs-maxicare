import React from 'react'
import BannerArea from '../sections/BannerArea';
import ServiceArea from '../sections/ServiceArea';

const HomePage = () => {
  return (
    <>
      <main className="home-3__background overflow-hidden">
        <BannerArea />
        <ServiceArea />
      </main>
    </>
  );
}

export default HomePage