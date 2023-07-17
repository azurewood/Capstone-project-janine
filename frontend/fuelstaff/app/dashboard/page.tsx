//dashboard page
'use client'
import React from 'react';
import CustomCarousel from '../../src/components/Carousel/Carousel';
import './dashboard.css';
import DashNavBar from '../../src/components/dnavbar/dashboardnavbar'; //importing the nav bar onto the dashboard page
import Meals from '../../src/components/MealCards/AllMeals' //importing meal cards onto the dashboard page
import SearchBar from '../../src/components/Searchbar'
// import { ShopContextProvider } from '@/src/components/context/shop-context';


export default function Dashboard() {
    return ( 
        <>
        {/* <ShopContextProvider> */}
            <DashNavBar/>
            <SearchBar/>
            <div className='custom-carousel'>
                <CustomCarousel/>
            </div>
            <div>
                <Meals/>
            </div>
        {/* </ShopContextProvider>  */}
          
        </>
    )
}