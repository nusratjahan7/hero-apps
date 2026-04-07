import React from 'react';
import Banner from '../../Components/HomePages/banner';
import Stats from '../../Components/HomePages/Stats';
import TrendingApps from '../../Components/HomePages/TrendingApps';


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