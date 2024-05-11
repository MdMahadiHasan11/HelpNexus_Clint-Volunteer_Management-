import React from 'react';
import { Link } from 'react-router-dom';

const NeedVolunteerCard = ({needVolunteer}) => {

    const {_id,Title, startDate , description} = needVolunteer;


    return (
        <div className="card w-96 bg-slate-200 text-neutral-content">
            <div className="card-body text-black items-center text-center">
                <h2 className="card-title">{Title}</h2>
                <p>{description}</p>
                <p>{startDate}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NeedVolunteerCard;