import React, { useState } from 'react';
import { BsTicketDetailedFill, BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { Link, useLocation } from 'react-router-dom';
import {ImStatsDots,ImFilesEmpty} from 'react-icons/im';
import {AiOutlineLaptop} from 'react-icons/ai';
import {GiFiles} from 'react-icons/gi';

const index = [
    {
        title: "Dashboard",
        Icon: <ImStatsDots />,
        path: "",
    },
    {
        title: "My Tickets",
        Icon: <BsTicketDetailedFill />,
        path: "",
    },
    {
        title: "Profile",
        Icon: <CgProfile />,
        path: "",
    },
    {
        title: "Users",
        Icon: <FaUsers />,
        path: "",
    },
    {
        title: "Assets",
        Icon: <AiOutlineLaptop />,
        path: "",
    },
    {
        title: "Tickets Type",
        Icon: <ImFilesEmpty />,
        path: "ticket",
    },
    {
        title: "Ticket Queue",
        Icon: <GiFiles />,
        path: "profile",
    },
 

];
const Sidebar = () => {
    const [show, setShow] = useState(false);
    const location = useLocation();

    return (
        <div >
            <div style={{position:'sticky', top:0 }} className={`${show ? 'w-20' : 'w-56'} border border-r-red-200 h-[100vh] px-7 pt-16`}>
                <div className='text-right text-2xl text-blue-400'>
                    {!show && <button onClick={()=>setShow(true)} ><BsFillArrowLeftSquareFill /></button>}
                    {show && <button onClick={()=>setShow(false)}><BsFillArrowRightSquareFill /></button>}
                </div>
                <div style={{ maxHeight: "calc(100% - 50px)" }}>
                    {index.map((nav, index) =>
                        <div key={index} >
                            <Link to={nav.path} className={`font-serif flex mb-[1rem] mt-8 text-lg gap-4 cursor-pointer ${location.pathname === `/${nav.path}` ? 'text-blue-700' : 'text-gray-500'}`}>
                                <button className='text-xl'>{nav.Icon}</button>
                                {!show && <p>{nav.title}</p>}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;