import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Modal = ({ isOpen, onClose,editMode,editIndex,editData }) => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem('addedData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(()=>{
       if(editMode === true){
        setType(editData.type);
        setDescription(editData.description);
       }
  },[editMode,editData])

  const resetForm =()=>{
    setType("");
    setDescription("");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const typeData = { type, description }
    if(editMode === true){
      const updateData = data.map((item,i)=> i === editIndex ? typeData : item);
      setData(updateData);
      localStorage.setItem('addedData', JSON.stringify(updateData));
      onClose();
      toast.success("Ticket Type Updated Successfully");
    }else{
      const updatedData = [...data, typeData];
      setData(updatedData);
      localStorage.setItem('addedData', JSON.stringify(updatedData));
      resetForm();
      onClose();
      toast.success("Ticked type Added Successfully");
    }
  }
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 bg-white p-10 rounded shadow-md w-[500px]">
        <div className='flex justify-between text-xl mb-3 '>
          <h1 className='font-serif'>{`${editMode ===true ? 'Edit' : 'Add'}`} Ticket Type</h1>
          <button onClick={onClose} className='border border-gray-500 px-2 rounded' >X</button>
        </div>
        <hr />
        <form className='flex justify-center mt-5' onSubmit={handleSubmit} >
          <div className='w-full'>
            <div>
              <label className='text-lg font-serif' >Ticket Type <span className='text-red-500'>*</span></label><br />
              <input name="type" value={type} type="text" onChange={(e) => setType(e.target.value)} className='mt-1 w-full rounded px-5 py-2 border border-gray-400' required />
            </div>
            <div className='mt-5'>
              <label className='text-lg font-serif'>Description</label><br />
              <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} className='mt-1 w-full rounded px-5 py-2 border border-gray-400' required></textarea>
            </div>
            <div className='flex gap-4 justify-end'>
              <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded" onClick={onClose}>Cancel </button>
              <input type="submit" value={`${editMode===true ? 'Save Changes' : 'Add Ticket Type'}`} className=" px-5 h-10 mt-4 text-white bg-blue-500 rounded cursor-pointer" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
