import React from 'react'
import backgroundimage from '../../public/capstoneimages/backgroundimage.jpg'
import Landingnavbar from './Landingnavbar';

const Landingbanner = ()=> {
  return (
    <div className="home-container">
        <Landingnavbar/>
        <div className ="home-image-section">
            <img src={backgroundimage} alt="backgroundimage"/>
        </div>
    </div>
  )
}

export default Landingbanner;