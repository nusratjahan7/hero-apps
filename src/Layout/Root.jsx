import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Shared/Navbar/Navbar';
import Footer from '../Components/Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <Navbar />
            {/* dynammic */}
            <Outlet />
            <Footer />


            <ToastContainer
             autoClose={2000}
            />
        </div>
    );
};

export default Root;