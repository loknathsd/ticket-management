import React from 'react';
import Avatar from '../images/avatar.jpg'

const Navbar = () => {
  return (
    <nav className="bg-gray-300 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-2">
        <h1> </h1>
        <img className='w-12 rounded-full'  src={Avatar} alt="user" />
      </div>
    </nav>

  );
};

export default Navbar;