import React from 'react';

import Stats from '../../Components/HomePages/Stats';
import TrendingApps from '../../Components/HomePages/TrendingApps';
import Banner from '../../Components/HomePages/Banner';



const Homepage = () => {
    return (
        <div>
            <Banner />
            <Stats />
            <TrendingApps />
        </div>
    );
};

export default Homepage;