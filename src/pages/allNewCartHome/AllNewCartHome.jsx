import React from 'react';
import { Link } from 'react-router-dom';

const AllNewCartHome = ({needVolunteerPost1}) => {
    const {_id,Title,selectedCategory,Thumbnail,NoVolunteers,startDate} = needVolunteerPost1;
    return (
        <div>
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

export default AllNewCartHome;