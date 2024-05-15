import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";

const Details = () => {

    const { id } = useParams();
    // console.log(id);

    const [viewVolunteer, setViewVolunteer] = useState({});

    useEffect(() => {
        fetch(`https://help-nexus-server.vercel.app/details/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setViewVolunteer(data);

            })
    }, [id])


    // { userName, email, Thumbnail, Title, description, Location, NoVolunteers, startDate, selectedCategory }
    return (
        <div className=" mt-10 mb-20 bg-white divide-y divide-gray-200">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Details</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="hero-content text-gray-500 bg-gray-50 flex-col lg:flex-row">
                <img src={viewVolunteer.Thumbnail} className="max-h-[550px] w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="lg:text-4xl md:text-2xl text-xl font-bold">{viewVolunteer.Title}</h1>
                    <p className="py-6 ">{viewVolunteer.description}</p>

                    <hr className=" border-gray-300 my-4" />

                    <p className="font-bold mb-4">Category: <span>{viewVolunteer.selectedCategory}</span></p>
                    
                    <div className="flex justify-between text-xl font-medium">
                        <p>No of Volunteers : {viewVolunteer.NoVolunteers}</p>
                        {/* <p><span className="ml-4">Rating:</span>{viewVolunteer.rating}</p> */}
                    </div>
                    <div className="flex my-6 justify-between text-xl font-semibold">
                        <p className="font-bold">
                            Dead Line: {new Date(viewVolunteer.startDate).toLocaleDateString()}
                        </p>
                        {/* <p>Customization:{viewVolunteer.customization}</p> */}
                    </div>

                    {
                        !viewVolunteer.NoVolunteers ?
                            <><p className='font-extrabold rounded-full gap-x-2 bg-yellow-100/60 text-red-500'>No volunteers are needed at the moment</p></>
                            : <>
                                <Link to={`/beVolunteer/${viewVolunteer._id}`}><button className=" btn bg-gradient-to-r from-cyan-700 to-blue-700 mb-10">Be A Volunteer</button></Link>
                            </>
                    }




                </div>
            </div>
        </div >
    );
};

export default Details;