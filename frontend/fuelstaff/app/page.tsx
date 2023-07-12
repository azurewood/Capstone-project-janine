//landing page for FuelStaff

'use client'
import React from 'react';
import backgroundimage from '../public/capstoneimages/backgroundimage.jpg'; //importing an image named backgroundimage
import Landingnavbar from '../src/components/landingpg/Landingnavbar'; //importing landing navbar component
import '../src/components/landingpg/landingstyles.css'

//defining landing page functional component using Tsx. Specifies that the component is of type React.FC (Functional component)
const LandingPage: React.FC = () => {
  const landingImageUrl = backgroundimage.src;

  return (
    <>
      <div>
      <Landingnavbar />
        <img src={landingImageUrl} className = "landingimage" alt="Landing Image"  /> 
      </div>
    </>
  );
};

export default LandingPage;
