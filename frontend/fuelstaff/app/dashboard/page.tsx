//dashboard page
'use client'
import React, {useState} from 'react';
import CustomCarousel from '../../src/components/Carousel/Carousel';
import './dashboard.css';
import DashNavBar from '../../src/components/dnavbar/dashboardnavbar'; //importing the nav bar onto the dashboard page
import Meals from '../../src/components/MealCards/AllMeals' //importing meal cards onto the dashboard page
// import SearchBar from '../../src/components/Searchbar' //importing Search bar which is below the navbar
import {CartContextProvider} from '../../src/components/Cart/cartcontext'


//manage state visibililty of the cart
const Dashboard: React. FC = () => {
    // const [cartOpen, setCartOpen] = useState(false);

    // const handleToggleCart = () => {
    //   setCartOpen(!cartOpen);
    // };
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
export default Dashboard;