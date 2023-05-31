import React from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

const TicketList = ({ data, handleDelete, handleEdit }) => {

    return (
        <div className="relative overflow-x-auto bg-white shadow-lg pb-12">
            <table className="w-full text-md text-center text-gray-500 dark:text-gray-400 ">
                <thead className="text-lg capitalize text-blue-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-5">
                            Ticket Type
                        </th>
                        <th scope="col" className="px-6 py-5">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-5">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((dt, index,) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {dt?.type}
                            </th>
                            <td className="px-6 py-4">
                                {dt?.description}
                            </td>
                            <td className="px-6 py-4">
                                <div className='flex gap-2 text-xl justify-center'>
                                    <button onClick={() => handleEdit(index)} className='border border-gray-300 p-2 rounded'><AiOutlineEdit /></button>
                                    <button onClick={() => handleDelete(index)} className='border border-gray-300 p-2 rounded'><AiOutlineDelete /></button>
                                </div>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
            {data?.length === 0 && <p className='text-center mt-24 text-2xl font-serif'>Not Add Yet </p>}
        </div>
    );
};

export default TicketList;