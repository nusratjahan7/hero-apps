import React, { useEffect, useState } from 'react';
import { appsData } from "../../AppsData/AppsData";
import { Download } from "lucide-react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { motion } from "framer-motion"
import { HashLoader } from 'react-spinners';
import { Link } from 'react-router';
import AppCard from './AppCard';

const topApps = [...appsData].sort((a, b) => b.downloads - a.downloads).slice(0, 8);

const TrendingApps = () => {

    const [loading, setLoading] = useState(true);
    const [apps, setApps] = useState([]);

    useEffect(() => {
    const loadData = async () => {
        try {
            await new Promise(resolve => setTimeout(resolve, 500));
            
            const data = appsData;

            setApps(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false); // data load hole off
        }
    };

    loadData();
}, []);
  

    return (
        <section className='bg-gray-100 px-3'>
        <div className='container mx-auto py-9'>
            {/* section header  */}
            <div className='text-center py-9 space-y-3'>
                <h2 className='text-3xl font-bold'>Trending Apps</h2>
                <p className='text-sm text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between mb-5'>
                <h3 className='text-xl font-bold'>Top Apps</h3>
                <Link to={'apps'}>
                <button className='flex items-center gap-2 font-bold text-[#1a2980]'>View All <FaArrowRight /></button>
                </Link>
            </div>
            {/* top apps */}
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-4'>
                { 
                loading ? 
                 (
            <div className="col-span-full flex justify-center items-center py-10">
                <HashLoader color="#1a2980" />
            </div>
        )  :
                    (topApps.map((app, ind) => <AppCard key={ind} app={app}></AppCard>))
                }
            </div>
            {/* ..... */}
        </div>
        </section>
    );
};

export default TrendingApps;