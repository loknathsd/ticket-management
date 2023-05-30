import React, { useState } from 'react';
import Modal from '../components/Modal/Modal';
import TicketList from '../components/TicketList';

const TicketTypes = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
    return (
        <>
            <div className='w-[80%] mx-auto mt-32'>
                <div className='text-right mb-5'>
                    <button onClick={openModal} className='text-white px-8 py-2 bg-blue-600 rounded'>Add Ticket Type</button>
                </div>
                <TicketList />
            </div>
            {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}

        </>
    );
};

export default TicketTypes;