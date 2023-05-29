import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
    return (
        <div className='flex gap-8'>
            <Sidebar />
            <div>
                <Outlet />
            </div>
            
        </div>
    );
};

export default DashboardLayout;