//dashboard page
'use client'
import React from 'react';
import CustomCarousel from '../../src/components/Carousel/Carousel';
import './dashboard.css';
import DashNavBar from '../../src/components/dnavbar/dashboardnavbar'; //importing the nav bar onto the dashboard page
import Meals from '../../src/components/MealCards/AllMeals' //importing meal cards onto the dashboard page


export default function Dashboard() {
    return ( 
        <>
            <div>
                <DashNavBar/>
            </div>
            <div className='custom-carousel'>
                <CustomCarousel/>
            </div>
            <div>
                <Meals/>
            </div>
           
          
        </>
    )
}