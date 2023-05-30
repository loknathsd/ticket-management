import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal/Modal';
import TicketList from '../components/TicketList';

const TicketTypes = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [allData,setAllData]=useState([]);
    const [editMode,setEditMode] = useState(false);
    const [editIndex,setEditIndex] = useState(null);
    const [editData,setEditData] = useState({});

    useEffect(()=>{
        const getData = localStorage.getItem('addedData');
        const data = JSON.parse(getData);
        setAllData(data)
    },[isModalOpen])

    const handleEdit=(index)=>{
        const edata = allData.filter((data,i)=>i===index);
        setEditData(edata[0]);
        openModal();
        setEditMode(true);
        setEditIndex(index);
    }
    const handleDelete=(index)=>{
        const updatedData = allData.filter((data,i)=>i !== index);
        setAllData(updatedData);
        localStorage.setItem('addedData',JSON.stringify(updatedData));
    }

    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };
    const handleButton=()=>{
        openModal();
        setEditMode(false);
    }
    return (
        <>
            <div className='w-[80%] mx-auto mt-32'>
                <div className='text-right mb-5'>
                    <button onClick={handleButton} className='text-white px-8 py-2 bg-blue-600 rounded'>Add Ticket Type</button>
                </div>
                <TicketList data={allData} handleDelete={handleDelete} handleEdit={handleEdit} />
            </div>
            {isModalOpen && <Modal 
            editMode={editMode}
             isOpen={isModalOpen} 
             onClose={closeModal}
             editIndex={editIndex}
             editData={editData}
              />}
        </>
    );
};

export default TicketTypes;