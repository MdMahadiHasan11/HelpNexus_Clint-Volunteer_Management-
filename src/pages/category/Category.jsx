import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import AllCartVolunteer from '../../components/allCartVolunteer/AllCartVolunteer';
import { Fade } from 'react-awesome-reveal';

const Category = () => {
    const { subcategory } = useParams();
    const [loading, setLoading] = useState(true);

    // category
    const [items, setItem] = useState([]);
    useEffect(() => {

        fetch(`https://help-nexus-server.vercel.app/category/${subcategory}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setItem(data);
                setLoading(false);

            })

    }, [subcategory])

    return (
        <div>
            <div className="mx-auto">
                <div className='mb-10'>
                    <p data-aos="fade-down"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000" className="text-3xl font-bold  text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-8 mt-6 mb-2 text-white"><Fade>{subcategory}</Fade>
                    </p>
                </div>
                {/* <div>
                    <p data-aos="fade-down"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000" className="text-3xl font-bold rounded-2xl text-center bg-yellow-700 py-8 mt-6 mb-2 text-white">{subcategory}</p>
                </div> */}
                <div className="grid lg:grid-cols-3 mb-10 md:grid-cols-2 grid-cols-1 gap-4 ">
                    {loading ? (<span className="loading loading-spinner text-info mx-auto"></span>) : (
                        items.map(item => <AllCartVolunteer key={item._id}
                            needVolunteerPost={item}></AllCartVolunteer>)
                    )}


                </div>

                {/* <div className="flex justify-center items-center">
                    <NavLink to={`/allNeedVolunteer`}><button className="btn bg-orange-600">See all</button></NavLink>
                </div> */}

            </div>
        </div>
    );
};

export default Category;