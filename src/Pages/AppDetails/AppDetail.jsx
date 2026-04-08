import React, { useContext } from 'react';
import { Link, useParams } from 'react-router';
import UseApps from '../../Hooks/UseApps';
import { ArrowLeft, Download, MessageSquare } from 'lucide-react';
import { FaStar } from 'react-icons/fa';
import { HashLoader } from 'react-spinners';
import AppNotFound from '../../Components/AppNotFound/AppNotFound';
import { InstalledAppsContext } from '../../Context/InstalledApps';
import { toast } from 'react-toastify';


const AppDetail = () => {
    const { id } = useParams();
    // console.log(id);
    const { apps, loading } = UseApps();
    // console.log(apps, loading);
    const expectedApp = apps.find((app) => app.id == id);
    // console.log(expectedApp);

    const {installed, setInstalled} = useContext(InstalledAppsContext);
    // console.log(installed);

    if(loading){
        return  <div className="col-span-full flex justify-center items-center py-10">
                <HashLoader color="#1a2980" />
            </div>;
    }

    if (!expectedApp) {
        return <AppNotFound />
    }

    const isInstalled = installed.some(app => app.id === expectedApp.id);

    const handleInstall = () => {
        setInstalled([...installed, expectedApp]);
        toast.success(`${expectedApp.title} is installed`);
    }   

    return (
        <section className='container mx-auto px-3'>
            <div className='mt-5'>
                 <Link to="/apps" className="mb-6 inline-flex items-center gap-1 text-sm text-gray-500 font-bold hover:text-[#1a2980] transition-colors">
                <ArrowLeft className="h-4 w-4" /> Back to Apps
                </Link>
            </div>
           <div className='mb-10 flex flex-col items-center gap-8 md:flex-row md:items-start'>
            <img src={expectedApp.image} alt={expectedApp.title}
             width={160}
          height={160}
          className="h-40 w-40 rounded-3xl object-contain border border-gray-100 shadow-md" />

          <div className='space-y-2 flex-1'>
            <h1 className='text-3xl font-bold'>{expectedApp.title}</h1>
            <p className='text-gray-500'> Developed by: <span className='text-[#1a2980] font-medium'> {expectedApp.companyName}</span></p>
            <div className='flex flex-wrap items-center gap-6'>
                <span className='flex items-center gap-1.5 text-orange-400'>
                    <FaStar />
                    {expectedApp.ratingAvg}
                </span>
                <span className='flex gap-1.5 items-center text-gray-500'>
                    <Download />
                    {expectedApp.downloads}
                </span>
                <span className='flex gap-1.5 items-center text-gray-500'>
                    <MessageSquare />
                    {expectedApp.reviews}
                </span>
                <span className='text-gray-500'>{expectedApp.size} MB</span>
            </div>
            
            <button 
            
            className={`btn mt-4 bg-linear-to-r from-[#1a2980] to-[#26d0ce] text-white ${
            isInstalled ? 'opacity-50 cursor-not-allowed' : ''
            }`}

            onClick={() => {
            if (!isInstalled) handleInstall();
           }}
            disabled={isInstalled}>

                {isInstalled ? 'Installed' : 'Install'}
            </button>
          </div>
           </div>
            
        </section>
    );
};

export default AppDetail;