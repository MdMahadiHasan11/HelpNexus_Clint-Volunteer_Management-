// import React from 'react';

import { useLoaderData } from "react-router-dom";

const AllNeedVolunteer = () => {
    const needVolunteers = useLoaderData();
    return (
        <div>
            allNeedVolunteer={needVolunteers.length}
        </div>
    );
};

export default AllNeedVolunteer;