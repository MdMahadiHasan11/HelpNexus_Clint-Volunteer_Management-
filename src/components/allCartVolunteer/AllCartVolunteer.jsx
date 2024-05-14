import React from 'react';
import { Link } from 'react-router-dom';

const AllCartVolunteer = ({ needVolunteerPost }) => {
    const { _id, Title, selectedCategory, Thumbnail, NoVolunteers, startDate } = needVolunteerPost;
    return (
        <div>
            {/* <div className="p-4 bg-base-200 rounded-lg">
                <div className=" flex-col lg:flex">

                    <div className="relative ">
                        <img src={Thumbnail} className="max-h-[200px] w-full rounded-lg shadow-2xl" />

                        <div className="absolute -top-6 -left-8 p-4">
                            <p className="text-white bg-blue-500 rounded-full w-10 text-center justify-center items-center h-10 font-semibold">NEW</p>
                        </div>


                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">{Title}</h1>
                        <div className="mb-6 mt-3">
                            <p>CategoryName: {selectedCategory}</p>
                        </div>

                        <hr className="border-b border-gray-300 my-4" />

                        <div className="flex justify-between text-xl font-semibold">
                            <p>Rating:{NoVolunteers}</p>
                            <p>Dead line:{new Date(startDate).toLocaleDateString()}</p>
                        </div>
                        <div className="flex my-6 justify-between  font-semibold">
                            <p className="font-bold">
                         
                            </p>
                           
                        </div>
                        <div className="flex mt-4 ">
                        </div>

                        <Link to={`/details/${_id}`}><button className="btn bg-orange-600">View Details</button></Link>
                    </div>
                </div>
            </div> */}

            {/*  */}
            <div className="card card-compact bg-gray-100 border-cyan-700  shadow-xl">
                <figure><img src={Thumbnail} className="max-h-[200px] w-full rounded-lg shadow-2xl" /></figure>
                <div className="card-body">
                    <h1 className="text-2xl card-title font-bold">{Title}</h1>
                    <p className='text-lg font-bold'>Category Name: {selectedCategory}</p>

                    <div className="card-actions text-lg font-semibold justify">
                        <p>Dead line:{new Date(startDate).toLocaleDateString()}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}><button className="btn bg-gradient-to-r from-cyan-700 to-blue-700 mb-10">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCartVolunteer;