import React from 'react';
import { Link } from 'react-router-dom';

const NeedVolunteerCard = ({ needVolunteer }) => {

    const { _id, Title, NoVolunteers, startDate,Thumbnail, description } = needVolunteer;


    return (
        <div className="card  bg-slate-200 text-neutral-content">
            <div>
                <img className='max-h-[250px]' src={Thumbnail} alt="" />
            </div>
            <div className="card-body text-black items-center text-center">
                <h2 className="card-title font-bold text-2xl">{Title}</h2>
                {/* <p>{description}</p> */}

                {
                    !NoVolunteers ?
                        <><p className='font-extrabold rounded-full p-3 text-lg gap-x-2 bg-yellow-100/60 text-red-500'>No volunteers are needed at the moment</p></>
                        : <>
                            <p className='text-xl font-bold'>No. of Volunteers Need:{NoVolunteers}</p>
                            <p className='font-bold'>Dead Line: {new Date(startDate).toLocaleDateString()}</p>
                        </>
                }

                
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}><button className="btn btn-outline btn-success btn-wide font-bold text-lg">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NeedVolunteerCard;