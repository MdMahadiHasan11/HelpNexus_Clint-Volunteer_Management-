// import React from 'react';

import { Link, useLoaderData } from "react-router-dom";
import NeedVolunteerCard from "../../components/needVolunteerCard/NeedVolunteerCard";
import { useEffect, useState } from "react";
import DynamicTitle from "../../components/dynamicTitle/DynamicTitle";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { MdTableRows } from "react-icons/md";

const AllNeedVolunteer = () => {
    // const needVolunteers = useLoaderData();
    const [searchText, setSearchText] = useState('');

    // work
    const [needVolunteer, setNeedVolunteer] = useState([]);

    // const searchText
    useEffect(() => {

        if (searchText.trim() !== "") {
            fetch(`http://localhost:5000/search/${searchText}`)
                .then(res => res.json())
                .then(data => {
                    setNeedVolunteer(data);

                })
        }
        else {

            fetch(`http://localhost:5000/needVolunteer`)
                .then(res => res.json())
                .then(data => {

                    setNeedVolunteer(data);
                })
        }


    }, [searchText])

    useEffect(() => {

        console.log(needVolunteer);

    }, [needVolunteer]);


    // layout
    
    const [layout,setLayout] =useState(true);

    const handleDelete = _id => {
        if (_id === 'table') {
            
            setLayout(false)

        }
        else setLayout(true)
    }

    return (
        <div>
            <DynamicTitle></DynamicTitle>
            {/* title bar  */}
            <div>
                <div>
                    <div className="navbar bg-base-300 rounded-box">
                        <div className="flex-1 px-2 lg:flex-none">
                            <form>
                                <div className="flex-1 px-2 lg:flex-none">
                                    <label className="input input-bordered flex items-center gap-2">
                                        <input type="text" className="grow"
                                            name="searchText"
                                            value={searchText} onChange={(e) => setSearchText(e.target.value)}
                                            placeholder="Search" />
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                    </label>
                                </div>
                            </form>
                        </div>
                        {/* dropdown and icon */}
                        <div className="flex justify-end flex-1 px-2">
                            <div className="flex items-stretch">

                                


                                <button onClick={() => handleDelete('grid')} className="btn btn-ghost rounded-btn text-3xl mx-4"><RiLayoutGrid2Fill /></button>
                                <button onClick={() => handleDelete('table')} className="btn btn-ghost rounded-btn text-3xl "><MdTableRows /></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* title bar */}


            {
                layout ?
                    <>

                        {/* grid form */}
                        <div className="container mx-auto">
                            <div>
                                <p data-aos="fade-down"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-yellow-700 py-8 mt-6 mb-2 text-white">Need Volunteer</p>
                            </div>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
                                {
                                    needVolunteer.map(needVolunteer => <NeedVolunteerCard key={needVolunteer._id}
                                        needVolunteer={needVolunteer}></NeedVolunteerCard>)
                                }

                            </div>

                        </div>

                    </>
                    : <>
                        {/* table form */}
                        <div className="mt-20">
                            <section className='container px-4 mx-auto pt-12'>
                                <div className='flex items-center gap-x-3'>
                                    <h2 className='text-lg font-medium text-gray-800 '>My Bids</h2>

                                    <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                                        05 Bid
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
                                                                <button className='flex items-center gap-x-2'>
                                                                    <span>Price</span>
                                                                </button>
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
                                                    <tbody className='bg-white divide-y divide-gray-200 '>
                                                        <tr>
                                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                                Build Dynamic Website
                                                            </td>

                                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                                10/04/2024
                                                            </td>

                                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                                $200
                                                            </td>
                                                            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                                <div className='flex items-center gap-x-2'>
                                                                    <p
                                                                        className='px-3 py-1 rounded-full text-blue-500 bg-blue-100/60
                           text-xs'
                                                                    >
                                                                        Web Development
                                                                    </p>
                                                                </div>
                                                            </td>
                                                            <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                                                                <div className='inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 text-yellow-500'>
                                                                    <span className='h-1.5 w-1.5 rounded-full bg-yellow-500'></span>
                                                                    <h2 className='text-sm font-normal '>Pending</h2>
                                                                </div>
                                                            </td>
                                                            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                                <button
                                                                    title='Mark Complete'
                                                                    className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none disabled:cursor-not-allowed'
                                                                >
                                                                    <svg
                                                                        xmlns='http://www.w3.org/2000/svg'
                                                                        fill='none'
                                                                        viewBox='0 0 24 24'
                                                                        strokeWidth='1.5'
                                                                        stroke='currentColor'
                                                                        className='w-5 h-5'
                                                                    >
                                                                        <path
                                                                            strokeLinecap='round'
                                                                            strokeLinejoin='round'
                                                                            d='M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75'
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>

                    </>
            }









        </div >
    );
};

export default AllNeedVolunteer;