import React from 'react';

const DeleteModal = ({ isOpen, onClose, handleConfirm }) => {
    if (!isOpen) {
        return null;
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 bg-white p-8 rounded shadow-md w-96 h-52 font-serif">
                <h1 className='mt-5 text-xl mb-3 '>Delete !!</h1>
                <p>Are you sure to delete this ?</p>
                <div className='flex gap-4 mt-8 justify-end'>
                    <button onClick={onClose} className='border border-gray-400 px-3 py-1 rounded'>No</button>
                    <button onClick={handleConfirm} className='bg-blue-500 rounded px-3 py-1 text-white'>Yes</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;