// import React from 'react';

import { Link, useLoaderData } from "react-router-dom";
import NeedVolunteerCard from "../../components/needVolunteerCard/NeedVolunteerCard";
import { useEffect, useState } from "react";
import DynamicTitle from "../../components/dynamicTitle/DynamicTitle";

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

                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">Dropdown</div>
                                    <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </ul>
                                </div>

                                <a className="btn btn-ghost rounded-btn">Button</a>
                                <a className="btn btn-ghost rounded-btn">Button</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* title bar */}

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
        </div >
    );
};

export default AllNeedVolunteer;