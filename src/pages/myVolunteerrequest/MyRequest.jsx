// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import img from '../../../public/image/nodata.jpg'

const MyRequest = () => {






    const { user } = useContext(AuthContext) || {};
    const [requestItems, setRequestItem] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/requestVolunteer/${user?.email}`,{credentials :'include'})
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRequestItem(data);
                // displayAll(data)
            })

    }, [user,requestItems])

    useEffect(() => {


    }, [requestItems])


    const handleDelete = (_id, jobId) => {
        console.log(_id);
        console.log(jobId);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Cancel!",
                    text: "Your file has been Canceled.",
                    icon: "success"
                });

                // update no of volunteer 

                fetch(`http://localhost:5000/noVolunteerUpdate/${jobId}`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify()
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            console.log('update no of volunteer')
                        }
                    })



                // delete request

                fetch(`http://localhost:5000/requestDelete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = user.filter(user => user._id !== _id);
                            setRequestItem(remaining);

                            // window.location.reload();                           

                        }
                    })
            }
        });
    }




    return (
        <section className='container px-4 mx-auto pt-12'>
            {
                !requestItems.length ?
                    <> <p className="text-center">Empty</p>
                        <div className="flex justify-center items-center" >
                            <img className="h-[300px]" src={img} alt="" />
                        </div>
                    </> :
                    <>
                        <div className='flex items-center gap-x-3'>
                            <h2 className='text-lg font-medium text-gray-800 '>My Request</h2>

                            <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                                {requestItems.length}
                            </span>
                        </div>

                        <div className='flex flex-col mt-6'>
                            <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                                <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                                    <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                                        <table className='min-w-full divide-y divide-gray-200'>
                                            <thead className='bg-gray-50'>
                                                <tr>
                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                    >
                                                        <span>Si No</span>
                                                    </th>
                                                    <th
                                                        scope='col'
                                                        className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                    >
                                                        <div className='flex items-center gap-x-3'>
                                                            <span>Title</span>
                                                        </div>
                                                    </th>

                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                    >
                                                        <span>Deadline</span>
                                                    </th>



                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                    >
                                                        Category
                                                    </th>

                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                    >
                                                        Status
                                                    </th>

                                                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            {
                                                requestItems.map((requestItem, index) =>
                                                    <tbody key={requestItem._id} className='bg-white divide-y divide-gray-200 '>
                                                        <tr>
                                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                                {index + 1}
                                                            </td>
                                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                                {requestItem.Title}
                                                            </td>

                                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                                {new Date(requestItem.startDate).toLocaleDateString()}
                                                            </td>


                                                            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                                <div className='flex items-center gap-x-2'>
                                                                    <p
                                                                        className='px-3 py-1 rounded-full text-blue-500 bg-blue-100/60
                               text-xs'
                                                                    >
                                                                        {requestItem.selectedCategory}
                                                                    </p>
                                                                </div>
                                                            </td>
                                                            <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                                                                <div className='inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 text-yellow-500'>
                                                                    <span className='h-1.5 w-1.5 rounded-full bg-yellow-500'></span>
                                                                    <h2 className='text-sm font-normal '>{requestItem.Status}</h2>
                                                                </div>
                                                            </td>
                                                            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                                <button onClick={() => handleDelete(requestItem._id, requestItem.jobId)} className="btn bg-orange-600">Cancel</button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            }
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div> </>

            }


        </section>
    )
};

export default MyRequest;