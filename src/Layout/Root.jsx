import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Shared/Navbar/Navbar';
import Footer from '../Components/Shared/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar />
            {/* dynammic */}
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;