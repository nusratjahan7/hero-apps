import React, { useEffect, useState } from 'react';
import { appsData } from '../AppsData/AppsData';

const UseApps = () => {

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

    return { apps, loading };
        
    
};

export default UseApps;