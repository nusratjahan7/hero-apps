import React from 'react';

const AppNotFound = () => {
    return (
       <div className="flex flex-col items-center justify-center py-20 text-center">
            
            {/* Icon / Emoji */}
            <div className="text-6xl mb-4">😕</div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                App Not Found
            </h1>

            {/* Subtitle */}
            <p className="text-gray-500 mb-6 max-w-md">
                Sorry, the app you are looking for does not exist or may have been removed.
            </p>

            {/* Button */}
            <Link 
                to="/apps" 
                className="px-6 py-2 rounded-full bg-[#1a2980] text-white font-semibold hover:bg-[#0f1c5c] transition"
            >
                ← Back to Apps
            </Link>

        </div>
    );
};

export default AppNotFound;