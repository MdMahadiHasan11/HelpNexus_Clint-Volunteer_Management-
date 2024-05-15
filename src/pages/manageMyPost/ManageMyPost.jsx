// import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import MyRequest from "../myVolunteerrequest/MyRequest";
import DynamicTitle from "../../components/dynamicTitle/DynamicTitle";
import img2 from '../../../public/image/empty1.jpg'

const ManageMyPost = () => {
    const { user } = useContext(AuthContext) || {};
    const [items, setItem] = useState([]);

    useEffect(() => {

        fetch(`https://help-nexus-server.vercel.app/needVolunteer/${user?.email}`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setItem(data);
                // displayAll(data)
            })

    }, [items ])

    // items

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                fetch(`https://help-nexus-server.vercel.app/delete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = user.filter(user => user._id !== _id);
                            setItem(remaining);
                            // setDisplayAll(item);
                            window.location.reload();
                        }
                    })
            }
        });
    }


    return (
        <div className=" ">
            <DynamicTitle></DynamicTitle>
            {
                !items.length ?
                    <>
                        <div className='my-10'>
                            <p data-aos="fade-down"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-8 mt-6 mb-2 text-white">My Need Volunteers Post
                            </p>
                        </div>
                        <p className="text-center text-3xl font-bold">My Need Volunteers Post Empty!!</p>
                        <div className="flex justify-center items-center" >
                            <img className="h-[300px]" src={img2} alt="" />
                        </div>
                    </>
                    : <>

                        {/* <div className='my-10'>
                            <p data-aos="fade-down"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-8 mt-6 mb-2 text-white">My Need Volunteers Post
                            </p>
                        </div>
                        <table className="table">
                            
                            <thead >
                                <tr className=" border-2" >
                                    <th className="text-lg border-2 font-bold" >
                                        Si No
                                    </th >
                                    <th className="text-lg border-2 font-bold">Title</th>
                                    <th className="text-lg  border-2font-bold">Category</th>
                                    <th className="text-lg border-2 font-bold">Dead Line</th>
                                    <th className="text-lg border-2 font-bold"></th>
                                </tr>
                            </thead>


                            {
                                items.map((item, index) => <tbody key={item._id}
                                >

                                    
                                    <tr className=" border-2">
                                        <th className=" border-2">
                                            {index + 1}
                                        </th>
                                        <td className=" border-2">
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.Thumbnail} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-lg font-bold">{item.Title}</div>

                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-lg font-bold border-2">
                                            {item.selectedCategory}
                                        </td>
                                        <td className="text-lg border-2 font-bold">{new Date(item.startDate).toLocaleDateString()}</td>

                                      
                                        <th className="border-2">
                                            




                                            <button onClick={() => handleDelete(item._id)} className="btn bg-orange-600">Delete</button>
                                            <Link to={`/update/${item._id}`}><button className="btn bg-orange-600">Update</button></Link>





                                        </th>
                                    </tr>

                                </tbody>)
                            }


                        </table>
                       */}
                        <div>

                            <div className=''>
                                <p data-aos="fade-down"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-8 mt-6 mb-2 text-white">My Post For Need Volunteers 
                                </p>
                            </div>
                           

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



                                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                                            <span className="text-lg font-bold">Action</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                {
                                                    items.map((requestItem, index) =>
                                                        <tbody key={requestItem._id} className='bg-white divide-y divide-gray-200 '>
                                                            <tr>
                                                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                                    {index + 1}
                                                                </td>
                                                                <td className='px-4 py-4 text-sm text-gray-500 flex gap-4   whitespace-nowrap'>
                                                                    <div className="avatar">
                                                                        <div className="mask mask-squircle w-12 h-12">
                                                                            <img src={requestItem.Thumbnail} alt="Avatar Tailwind CSS Component" />
                                                                        </div>
                                                                    </div>
                                                                    <p>{requestItem.Title}</p>

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

                                                                <td className=" flex gap-4 ">
                                                                    {/* <Link to={`/details/${item._id}`}><button  className="btn bg-orange-600 ">View Details</button></Link> */}


                                                                    <div>
                                                                        <button onClick={() => handleDelete(requestItem._id)} className="btn bg-orange-600">Delete</button>

                                                                    </div>
                                                                    <div>
                                                                        <Link to={`/update/${requestItem._id}`}><button className="btn bg-orange-600">Update</button></Link>

                                                                    </div>









                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    )
                                                }
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                       

                    </>
            }


            <MyRequest></MyRequest>
        </div >
    );
};

export default ManageMyPost;