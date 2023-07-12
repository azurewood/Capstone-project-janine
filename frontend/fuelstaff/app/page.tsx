'use client'
import React from 'react';
import backgroundimage from '../public/capstoneimages/backgroundimage.jpg';
import Landingnavbar from '../src/components/Landingnavbar';

const LandingPage: React.FC = () => {
  const landingImageUrl = backgroundimage.src;

  return (
    <>
      <div>
      <Landingnavbar />
        <img src={landingImageUrl} alt="Landing Image" />
      </div>
    </>
  );
};

export default LandingPage;
