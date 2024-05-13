import React from 'react';
import { Link } from 'react-router-dom';

const NeedVolunteerCard = ({ needVolunteer }) => {

    const { _id, Title, NoVolunteers, startDate, description } = needVolunteer;


    return (
        <div className="card  bg-slate-200 text-neutral-content">
            <div className="card-body text-black items-center text-center">
                <h2 className="card-title">{Title}</h2>
                <p>{description}</p>

                {
                    !NoVolunteers ?
                        <><p className='font-extrabold rounded-full gap-x-2 bg-yellow-100/60 text-red-500'>No volunteers are needed at the moment</p></>
                        : <>
                            <p>No. of Volunteers Need:{NoVolunteers}</p>
                        </>
                }

                <p>{new Date(startDate).toLocaleDateString()}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NeedVolunteerCard;