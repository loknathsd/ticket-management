import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-center align-bottom mt-52'>
            <p>&copy; {new Date().getFullYear()} GroupM</p>
        </div>
    );
};

export default Footer;