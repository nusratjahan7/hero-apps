import React from 'react';
import { appsData } from "../../AppsData/AppsData";
import { Download } from "lucide-react";
import { FaStar } from "react-icons/fa";


const AppCard = () => {
    return (
        <div>
            {
                appsData.map((app, index) => (
                    <div  key={index}
                     className="group flex flex-col items-center rounded-xl border border-gray-200 bg-white p-5 transition-all hover:shadow-sm hover:-translate-y-1"
                    >
                        <img
                            src={app.image}
                            alt={app.title}
                            loading="lazy"
                            width={80}
                            height={80}
                            className=" h-20 w-20 rounded-2xl object-contain"
                        />
                         <h3 className="mb-1 text-sm font-semibold text-black text-center line-clamp-1">
                            {app.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-gray-700">
                 <span className="flex items-center gap-1">
                <FaStar className="h-3.5 w-3.5 text-yellow-500" />
                     {app.ratingAvg}
                </span>
                 <span className="flex items-center gap-1">
                <Download className="h-3.5 w-3.5" />
        
                 </span>
                 </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AppCard;