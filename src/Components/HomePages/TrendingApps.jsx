import React from 'react';
import { appsData } from "../../AppsData/AppsData";


const TrendingApps = () => {
    return (
        <section className='bg-gray-100'>
        <div className='container mx-auto py-9'>
            {/* section header  */}
            <div className='text-center py-9 space-y-3'>
                <h2 className='text-3xl font-bold'>Trending Apps</h2>
                <p className='text-sm text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {/* top apps */}
            <div>
                {
                    appsData.map((app, ind) => <h2 key={ind}>{app.title}</h2>)
                }
            </div>
        </div>
        </section>
    );
};

export default TrendingApps;