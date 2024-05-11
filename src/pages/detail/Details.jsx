import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Details = () => {

    const { id } = useParams();
    console.log(id);

    const [viewVolunteer, setViewVolunteer] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/details/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setViewVolunteer(data);

            })
    }, [id])


// { userName, email, Thumbnail, Title, description, Location, NoVolunteers, startDate, selectedCategory }
    return (
        <div className="hero min-h-screen mt-10 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={viewVolunteer.Thumbnail} className="max-h-[550px] w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="lg:text-4xl md:text-2xl text-xl font-bold">{viewVolunteer.Title}</h1>
                    <p className="py-6 font-bold">{viewVolunteer.description}</p>

                    <p className="font-bold">Category: <span>{viewVolunteer.selectedCategory}</span></p>
                    <hr className="border-b border-gray-300 my-4" />
                    <div className="flex justify-between text-xl font-semibold">
                        <p>NoVolunteers:{viewVolunteer.NoVolunteers}</p>
                        {/* <p><span className="ml-4">Rating:</span>{viewVolunteer.rating}</p> */}
                    </div>
                    <div className="flex my-6 justify-between text-xl font-semibold">
                        <p className="font-bold">
                        startDate:{viewVolunteer.startDate}
                        </p>
                        {/* <p>Customization:{viewVolunteer.customization}</p> */}
                    </div>


                    <Link to={`/beVolunteer/${viewVolunteer._id}`}><button className="btn bg-orange-600">Be A Volunteer</button></Link>

                </div>
            </div>
        </div>
    );
};

export default Details;