//dashboard page
'use client'
import React from 'react';
import CustomCarousel from '../../src/components/Carousel/Carousel';
import './dashboard.css';
import DashNavBar from '../../src/components/dnavbar/dashboardnavbar'; 
import Meals from '../../src/components/MealCards/AllMeals' 
// import {CartContextProvider} from '@/src/components/Cart/cartcontext'



//manage state visibililty of the cart
const Dashboard: React. FC = () => {
   
    return ( 
        <>  
         {/* <CartContextProvider> */}
            <DashNavBar/>
            <div className='custom-carousel'>
                <CustomCarousel/>
            </div>
            <div>
                <Meals/>  
            </div>       
         {/* </CartContextProvider> */}
        </>
    )
}
export default Dashboard;