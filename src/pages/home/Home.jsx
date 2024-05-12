// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Slider from "../../components/slider/Slider";
import AllCartVolunteer from "../../components/allCartVolunteer/AllCartVolunteer";
import { useEffect, useState } from "react";

const Home = () => {

    const [needVolunteerPosts, setNeedVolunteerPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/sortDate`)
            .then(res => res.json())
            .then(data => {
                setNeedVolunteerPosts(data); 
                setLoading(false);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);



    return (
        <div>
            <Slider></Slider>
            <div>
                <div className="container mx-auto">
                    <div>
                        <p data-aos="fade-down"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-yellow-700 py-8 mt-6 mb-2 text-white">Need Volunteer</p>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
                        {loading ? (<span className="loading loading-spinner text-info mx-auto"></span>) : (
                            needVolunteerPosts.map(needVolunteerPost => <AllCartVolunteer key={needVolunteerPost._id}
                                needVolunteerPost={needVolunteerPost}></AllCartVolunteer>)
                        )}


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;