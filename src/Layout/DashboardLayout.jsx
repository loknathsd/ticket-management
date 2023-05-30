import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
    return (
        <div className='flex '>
            <Sidebar />
            <div className='w-full bg-blue-100'>
                <Navbar />
                <Outlet />
                <Footer/>
            </div>
            
        </div>
    );
};

export default DashboardLayout;