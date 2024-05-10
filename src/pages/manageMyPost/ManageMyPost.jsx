// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/providers/AuthProvider";

const ManageMyPost = () => {
    const { user } = useContext(AuthContext) || {};
    const [item, setItem] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/needVolunteer/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data);
                // displayAll(data)
            })

    }, [user])


    return (
        <div>
            {/* Manage My Post:{user.email} */}
        </div>
    );
};

export default ManageMyPost;