import React, { useEffect, useState } from 'react';
import AppCard from '../../Components/HomePages/AppCard';
import { appsData } from "../../AppsData/AppsData";
import { HashLoader } from 'react-spinners';

const Apps = () => {
      
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
                setLoading(false); 
            }
        };
    
        loadData();
        }, []);

    return (
        <section className='bg-gray-50'>
            <div className='container mx-auto px-3 py-4'>
            <div className='my-4'>
                <h1 className="mb-2 text-3xl font-bold ">All Apps</h1>
                <p className="text-gray-600 font-medium">Browse our complete collection of curated applications</p>
            </div>
        
            <div>
                <p className='text-lg font-medium text-gray-600'>{apps.length} found</p>
            </div>

            <div className='py-5'>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-4'>
                { 
                loading ? 
                 (
            <div className="col-span-full flex justify-center items-center py-10">
                <HashLoader color="#1a2980" />
            </div>
        )  :
                    (appsData.map((app, ind) => <AppCard key={ind} app={app}></AppCard>))
                }
            </div>
            </div>

        </div>
        </section>
    );
};

export default Apps;