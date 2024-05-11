import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../components/providers/AuthProvider';
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
import "react-datepicker/dist/react-datepicker.css";

const Update = () => {

    const { id } = useParams();
    const { user } = useContext(AuthContext);
    console.log(id);
    
    const [volunteer, setVolunteer] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/updateVolunteer/${id}`)
            .then(res => res.json())
            .then(data => {
                setVolunteer(data);
                // console.log(data)
            })
    }, [id])

   
    // const op =volunteer.startDate
    const [selectedCategory, setSelectedOption] = useState("React.js");
    const [startDate, setStartDate] = useState(new Date());


   
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const Thumbnail = form.get('Thumbnail');
        const Title = form.get('Title');
        const description = form.get('description');
        const Location = form.get('Location')
        const NoVolunteers = form.get('NoVolunteers')
        // const processingTime = form.get('processingTime')
        // const stockStatus = form.get('stockStatus');
        // const image = form.get('image')
        const userName = user.displayName;
        const email = user.email;



        const updateNeedVolunteer = { userName, email, Thumbnail, Title, description, Location, NoVolunteers, startDate, selectedCategory }

        console.log(id)

        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateNeedVolunteer)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {

                    Swal.fire({
                        title: 'Success!',
                        text: 'Need Volunteer Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })

                }
            })

    }


    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] w-full my-12'>
            <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-2xl '>
                <h2 className='text-2xl font-bold text-center  text-gray-700 capitalize '>
                    Update Volunteer Need Post
                </h2>

                <form onSubmit={handleUpdate} className="mx-auto">
                    <div className="lg:flex">
                        <div className="lg:w-full lg:mr-4 ">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="text" name="Name" placeholder="Name" className="input input-bordered" readOnly
                                    value={user.displayName} />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Title</span>
                                </label>
                                <input type="text" name="Title" placeholder="Title" defaultValue={volunteer.Title} className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Thumbnail Url</span>
                                </label>
                                <input type="text" name="Thumbnail" placeholder="Thumbnail Url" defaultValue={volunteer.Thumbnail} className="input input-bordered" required />
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Location</span>
                                </label>
                                <input type="text" name="Location" placeholder="Location" defaultValue={volunteer.Location} className="input input-bordered" required />
                            </div>



                        </div>


                        <div className="lg:w-full">


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="text" name="Email" className="input input-bordered" readOnly
                                    value={user.email} />
                            </div>

                            <label className="form-control">
                                <div className="label font-bold">
                                    <span className="label-text">Category</span>
                                </div>


                                <select className="select select-bordered " value={selectedCategory} onChange={(e) => setSelectedOption(e.target.value)}>
                                    <option value="React.js">React.js</option>
                                    <option value="MongoDB">MongoDB</option>
                                    <option value="Express.js">Express.js</option>
                                    <option value="Node.js">Node.js</option>
                                </select>
                            </label>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">No of Volunteers</span>
                                </label>
                                <input type="number" name="NoVolunteers" placeholder="No of Volunteers" defaultValue={volunteer.NoVolunteers} className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Deadline</span>
                                </label>

                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy" className='input input-bordered w-full' />

                            </div>



                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Description</span>
                        </label>
                        <textarea type="text" name="description" rows={5} placeholder="Description" defaultValue={volunteer.description} className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Post</button>
                    </div>
                </form>
                <div>

                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"

                    />

                    <ToastContainer />
                </div>

            </section>
        </div>
    );
};

export default Update;