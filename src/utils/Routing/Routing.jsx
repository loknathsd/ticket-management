import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import TicketTypes from '../../pages/TicketTypes';

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<DashboardLayout/>}>
                <Route path='/' element={<Navigate replace to="/ticket" />}/>
                <Route path='/ticket' element={<TicketTypes />}/>
            </Route>
        </Routes>
    );
};

export default Routing;