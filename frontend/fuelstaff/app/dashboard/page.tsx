//dashboard page
'use client'
import React from 'react';
import CustomCarousel from '../../src/components/Carousel/Carousel';
import './dashboard.css';
import DashNavBar from '../../src/components/dnavbar/dashboardnavbar';
import Meals from '../../src/components/MealCards/AllMeals'




export default function Dashboard() {
    return ( 
        <>
            <div>
                <DashNavBar/>
            </div>
            <div className='custom-carousel'>
                <CustomCarousel/>
            </div>
            <div><Meals/></div>
           
          
        </>
    )
}