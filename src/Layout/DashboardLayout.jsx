import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <h1>hello bangladesh</h1>
            <div>
                <Outlet />
            </div>
            
        </div>
    );
};

export default DashboardLayout;