import React, { createContext, useState } from 'react';

export const InstalledAppsContext = createContext()

const InstalledApps = ({children}) => {

   const [installed, setInstalled] = useState([]);

    const data ={
        installed, setInstalled
    }

    return <InstalledAppsContext.Provider value={data}>{children}</InstalledAppsContext.Provider>;
};

export default InstalledApps;