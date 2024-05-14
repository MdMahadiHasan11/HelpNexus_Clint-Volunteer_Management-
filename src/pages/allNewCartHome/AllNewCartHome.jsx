import React from 'react';
import { Link } from 'react-router-dom';

const AllNewCartHome = ({needVolunteerPost1}) => {
    const {_id,Title,selectedCategory,Thumbnail,NoVolunteers,startDate} = needVolunteerPost1;
    return (
        <div>
            <div className="p-4 bg-base-200 rounded-lg">
                <div className=" flex-col lg:flex">

                    <div className="relative ">
                        <img src={Thumbnail} className="max-h-[230px] w-full rounded-lg shadow-2xl" />

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
                                {/* Availability:{stockStatus} */}
                            </p>
                            {/* <p>Customization:{customization}</p> */}
                        </div>
                        <div className="flex mt-4 ">
                        </div>

                        <Link to={`/details/${_id}`}><button className="btn bg-orange-600">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllNewCartHome;