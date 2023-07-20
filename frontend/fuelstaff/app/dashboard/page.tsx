//dashboard page
'use client'
import React from 'react';
import CustomCarousel from '../../src/components/Carousel/Carousel';
import './dashboard.css';
import DashNavBar from '../../src/components/dnavbar/dashboardnavbar'; //importing the nav bar onto the dashboard page
import Meals from '../../src/components/MealCards/AllMeals' //importing meal cards onto the dashboard page
// import SearchBar from '../../src/components/Searchbar' //importing Search bar which is below the navbar
import {CartContextProvider} from '../../src/components/Cart/cartcontext'
import {Cart} from '../../src/components/Cart/cart'



export default function Dashboard() {
    return ( 
        <>
         <CartContextProvider>
            <DashNavBar/>
            {/* <SearchBar/> */}
            <div className='custom-carousel'>
                <CustomCarousel/>
            </div>
            <div>
                <Meals/>
            </div>
         </CartContextProvider>
        </>
    )
}
 