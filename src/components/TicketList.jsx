import React from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

const TicketList = ({ data, handleDelete, handleEdit }) => {

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Ticket Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 && <th scope='col' className='mt-10 ml-32'>Not found </th>}
                    {
                        data.map((dt, index,) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {dt.type}
                            </th>
                            <td className="px-6 py-4">
                                {dt.description}
                            </td>
                            <td className="px-6 py-4">
                                <div className='flex gap-2 text-xl'>
                                    <button onClick={() => handleEdit(index)} className='border border-gray-300 p-2 rounded'><AiOutlineEdit /></button>
                                    <button onClick={() => handleDelete(index)} className='border border-gray-300 p-2 rounded'><AiOutlineDelete /></button>
                                </div>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default TicketList;