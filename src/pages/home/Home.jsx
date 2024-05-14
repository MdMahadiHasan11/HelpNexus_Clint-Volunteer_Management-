// import React from 'react';
import img from '../../../public/image/empty1.jpg'

import { Link, NavLink, useLoaderData } from "react-router-dom";
import Slider from "../../components/slider/Slider";
import AllCartVolunteer from "../../components/allCartVolunteer/AllCartVolunteer";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import DynamicTitle from "../../components/dynamicTitle/DynamicTitle";
import AllNewCartHome from "../allNewCartHome/AllNewCartHome";

const Home = () => {

    const [needVolunteerPosts, setNeedVolunteerPosts] = useState([]);

    const [needVolunteerPosts1, setNeedVolunteerPosts1] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loading1, setLoading1] = useState(true);

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

    // new last 3 data
    useEffect(() => {
        fetch(`http://localhost:5000/newPost`)
            .then(res => res.json())
            .then(data => {
                setNeedVolunteerPosts1(data);
                setLoading1(false);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading1(false);
            });
    }, []);
    const newNeedVolunteerPosts1 = needVolunteerPosts1.slice(-3);






    return (
        <div>
            {/* <Helmet>
                <meta charSet="utf-8" />
                <title>Home - HelpNexus</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet> */}
            <DynamicTitle></DynamicTitle>
            <Slider></Slider>
            <div>
                <div className="">
                    <div className='my-10'>
                        <p data-aos="fade-down"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-8 mt-6 mb-2 text-white">Volunteer Needs Now</p>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
                        {loading ? (<span className="loading loading-spinner text-info mx-auto"></span>) : (
                            needVolunteerPosts.map(needVolunteerPost => <AllCartVolunteer key={needVolunteerPost._id}
                                needVolunteerPost={needVolunteerPost}></AllCartVolunteer>)
                        )}


                    </div>



                    <div className="flex mt-10 mb-3 justify-center items-center">
                        <NavLink to={`/allNeedVolunteer`}><button className="btn btn-outline btn-success btn-wide font-bold text-lg">See all</button></NavLink>
                    </div>
                    <hr />

                </div>
            </div>
            {/* category */}

            <div>
                <div className='my-10'>
                    <p data-aos="fade-down"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-8 mt-6 mb-2 text-white">Volunteer Category</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4   mx-auto" >


                    <div>
                        <div className="bg-base-300 shadow-xl text-center   rounded-2xl">
                            <Link to={`/category/React.js`}>
                                <div className="flex justify-center items-center ">
                                    <img src='https://i.ibb.co/bPGTTBD/1708753498052.png' alt="Movie" className=" max-h-[350px] w-full   " />
                                </div>


                                <h2 className="font-extrabold text-2xl flex justify-center items-center py-4">
                                    React.js
                                </h2>

                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="bg-base-300 shadow-xl text-center   rounded-2xl">
                            <Link to={`/category/Express.js`}>
                                <div className="flex justify-center items-center ">
                                    <img src='https://i.ibb.co/s6gHF3w/mongodb-developers.jpg' alt="Movie" className=" h-max-[350px]    " />
                                </div>


                                <h2 className="font-extrabold text-2xl flex justify-center items-center py-4">
                                    Express.js
                                </h2>

                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="bg-base-300 shadow-xl text-center   rounded-2xl">
                            <Link to={`/category/Node.js`}>
                                <div className="flex justify-center items-center ">
                                    <img src='https://i.ibb.co/bPGTTBD/1708753498052.png' alt="Movie" className=" max-h-[350px] w-full   " />
                                </div>


                                <h2 className="font-extrabold text-2xl flex justify-center items-center py-4">
                                    Node.js
                                </h2>

                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="bg-base-300 shadow-xl text-center   rounded-2xl">
                            <Link to={`/category/MongoDB`}>
                                <div className="flex justify-center items-center ">
                                    <img src='https://i.ibb.co/s6gHF3w/mongodb-developers.jpg' alt="Movie" className=" max-h-[350px] w-full   " />
                                </div>


                                <h2 className="font-extrabold text-2xl flex justify-center items-center py-4">
                                    MongoDB
                                </h2>

                            </Link>
                        </div>
                    </div>



                </div>
            </div>

            {/* new data */}
            <hr className='mt-6' />
            <div>

                <div className='my-10'>
                    <p data-aos="fade-down"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-8 mt-6 mb-2 text-white">New Post For Volunteer Needs</p>
                </div>


                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
                        {loading1 ? (<span className="loading loading-spinner text-info mx-auto"></span>) : (
                            newNeedVolunteerPosts1.map(needVolunteerPost1 => <AllNewCartHome key={needVolunteerPost1._id}
                                needVolunteerPost1={needVolunteerPost1}></AllNewCartHome>)
                        )}


                    </div>

                    <div className="flex justify-center my-10 items-center">
                        <NavLink to={`/allNeedVolunteer`}><button className="btn btn-outline btn-success btn-wide font-bold text-lg">See all</button></NavLink>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;