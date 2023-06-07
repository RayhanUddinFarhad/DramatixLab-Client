import React from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';

const Main = () => {
    return (
        <div>

            <Navbar></Navbar>
            <div className=' md:min-h-[calc(100vh-341px)]'>

            <Outlet></Outlet>

            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default Main;