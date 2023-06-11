import React from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import PageCompo from '../components/shared/PageCompo';

const Main = () => {
    return (
        <div>

<Navbar></Navbar>
            <div className='mx-auto  lg:p-1 lg:max-w-[1280px] md:min-h-[calc(100vh-341px)]'>

            <Outlet></Outlet>

            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default Main;