import React, { useContext } from 'react';
import { InstalledAppsContext } from '../../Context/InstalledApps';
import { Trash2, Package } from 'lucide-react';
import { toast } from 'react-toastify';

const Installation = () => {

    const { installed, setInstalled } = useContext(InstalledAppsContext);

    const handleUninstall = (app) => {
        const restApps = installed.filter(i => i.id !== app.id);
        setInstalled(restApps);
        toast.error(`${app.title} is uninstalled`);
    };

    return (
        <div className="container mx-auto py-12 px-3 min-h-[54.2vh]">
          
            <div className="mb-8">
                <h1 className="mb-2 text-3xl font-bold">My Installation</h1>
                <p className="text-gray-500">Manage your installed applications</p>
            </div>

            <p className="text-sm text-gray-500 font-medium mb-5">
                {installed.length} installed
            </p>

            {
                installed.length === 0 ? (
                    <div className="flex min-h-[20vh] flex-col items-center justify-center text-center">
                        <Package className="mb-4 h-12 w-12 text-gray-400" />
                        <h3 className="text-lg font-semibold">No Apps Installed</h3>
                        <p className="text-sm text-gray-500">
                            Browse the store and install your favorite apps
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {installed.map((app) => (
                            <div
                                key={app.id}
                                className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 p-4 shadow-sm"
                            >
                                <div className="flex items-center gap-3">
                                    <img src={app.image} alt={app.title} className="w-12 h-12 rounded-xl" />
                                    <div>
                                        <h3 className="font-bold">{app.title}</h3>
                                        <p className="text-sm text-gray-500">{app.companyName}</p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleUninstall(app)}
                                    className="p-2 rounded-lg hover:bg-red-100 text-red-500"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
};

export default Installation;