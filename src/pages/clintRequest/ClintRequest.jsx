import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../components/providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import img from '../../../public/image/nodata.jpg'
// import { toast } from 'react-toastify';

const ClintRequest = () => {
    const { user } = useContext(AuthContext) || {};
    const [requestItems, setRequestItem] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/clintRequest/${user?.email}`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRequestItem(data);
                // displayAll(data)
            })

    }, [user])

    // requestItems


    // useEffect(() => {


    // }, [requestItems])

    // handel status accept 
    const handleAccept = (_id, jobId,Status) => {
        if(Status === 'pending') return toast.error('Already Accept')
            if(Status === 'rejected') return toast.error('Already Reject')
        console.log(_id);
        console.log(jobId);
        console.log(user.email)

        Swal.fire({
            title: "Are you sure?",
            text: "Accept!",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Accept it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Accept!",
                    text: "Accept.",
                    icon: "success"
                });
    

                // update no of volunteer 
                const Status = "pending";
                // const/ status =

                fetch(`http://localhost:5000/clintStatusUpdate/${_id}`, {
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
                            console.log('clintStatusUpdate for volunteer')
                        }
                    })



                // delete request

                // fetch(`http://localhost:5000/requestDelete/${_id}`, {
                //     method: 'DELETE'
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log(data);
                //         if (data.deletedCount > 0) {
                //             const remaining = user.filter(user => user._id !== _id);
                //             setRequestItem(remaining);

                //             // window.location.reload();                           

                //         }
                //     })
            }
        });
    }
    // handle reject
    const handleReject = (_id, jobId,Status) => {

        if(Status === 'rejected') return toast.error('Already rejected')

        console.log(_id);
        console.log(jobId);
        console.log(user.email)

        Swal.fire({
            title: "Are you sure?",
            text: "Reject!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reject it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Reject!",
                    text: "Reject.",
                    icon: "warning"
                });
    

                // update no of volunteer 
                const Status = "rejected";
                // const/ status =

                fetch(`http://localhost:5000/clintStatusUpdateReject/${_id}`, {
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
                            console.log('clintStatusUpdate for volunteer')
                        }
                    })

            }
        });
    }


    return (
        <section className='  mx-auto'>
            {
                !requestItems.length ?
                    <>
                        <div className='my-10'>
                            <p data-aos="fade-down"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-8 mt-6 mb-2 text-white">All Volunteers Request
                            </p>
                        </div>
                        <p className="text-center text-3xl font-bold">I Have No Volunteer Request!!</p>
                        <div className="flex justify-center items-center" >
                            <img className="my-20 h-[300px]" src={img} alt="" />
                        </div>
                    </> :
                    <>
                        {/* <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"


                        /> */}

                        <div className='my-10'>
                            <p data-aos="fade-down"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-8 mt-6 mb-2 text-white">All Volunteers Request
                            </p>
                            <ToastContainer />
                        </div>
                        {/* <div className='flex items-center gap-x-3'>
                        </div> */}

                        <div className='flex flex-col mt-6'>
                            <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                                <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                                    <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                                        <table className='min-w-full divide-y divide-gray-200'>
                                            <thead className='bg-gray-50 text-lg font-bold'>
                                                <tr>
                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                    >
                                                        <span className="text-lg font-bold">Si No</span>
                                                    </th>
                                                    <th
                                                        scope='col'
                                                        className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                    >
                                                        <div className='flex items-center gap-x-3'>
                                                            <span className="text-lg font-bold">Clint Email:</span>
                                                        </div>
                                                    </th>
                                                    <th
                                                        scope='col'
                                                        className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                    >
                                                        <div className='flex items-center gap-x-3'>
                                                            <span className="text-lg font-bold">Title</span>
                                                        </div>
                                                    </th>

                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                    >
                                                        <span className="text-lg font-bold">Deadline</span>
                                                    </th>



                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                    >
                                                        <span className="text-lg font-bold">Category</span>
                                                    </th>

                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                    >
                                                        <span className="text-lg font-bold">Status</span>
                                                    </th>

                                                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                                        <span className="text-lg font-bold">Action</span>
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
                                                                {requestItem.volunteerEmail}
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
                                                                <div className={`inline-flex ${requestItem.Status === 'pending' ? 'bg-green-100/60 text-green-500' :  requestItem.Status === 'requested'? 'bg-yellow-100/60 text-yellow-500' : 'bg-red-100/90 text-red-500'} items-center px-3 py-1 rounded-full gap-x-2`}>

                                                                    <span className={`h-1.5 w-1.5 rounded-full ${requestItem.Status === 'pending' ? 'bg-green-700' : 'bg-yellow-500'}`}></span>
                                                                    <h2 className='text-sm font-normal '>

                                                                        {requestItem.Status}</h2>
                                                                </div>
                                                            </td>
                                                            <td className=' text-sm whitespace-nowrap'>
                                                                <button onClick={() => handleAccept(requestItem._id, requestItem.jobId,requestItem.Status)} className="btn  btn-success mr-2">Accept</button>
                                                                <button onClick={() => handleReject(requestItem._id, requestItem.jobId,requestItem.Status)} className="btn btn-warning">Reject</button>
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
    );
};

export default ClintRequest;