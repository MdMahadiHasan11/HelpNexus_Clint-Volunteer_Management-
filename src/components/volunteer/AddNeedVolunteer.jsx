import Swal from 'sweetalert2'
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { AuthContext } from "../../providers/AuthProvider";
import { AuthContext } from '../providers/AuthProvider';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import DynamicTitle from '../dynamicTitle/DynamicTitle';

const AddNeedVolunteer = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    // const { user } = useAuth() || {};

    const [selectedCategory, setSelectedOption] = useState("React.js");
    const [startDate, setStartDate] = useState(new Date());


    const handleAdd = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const Thumbnail = form.get('Thumbnail');
        const Title = form.get('Title');
        const description = form.get('description');
        const Location = form.get('Location')
        const NoVolunteers = parseInt(form.get('NoVolunteers'))
        // const processingTime = form.get('processingTime')
        // const stockStatus = form.get('stockStatus');
        // const image = form.get('image')
        const userName = user.displayName;
        const email = user.email;



        const newNeedVolunteer = { userName, email, Thumbnail, Title, description, Location, NoVolunteers, startDate, selectedCategory }

        console.log(newNeedVolunteer)


        // send data

        fetch('http://localhost:5000/needVolunteer', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newNeedVolunteer)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                    Swal.fire({
                        title: 'Success!',
                        text: 'Added Volunteer Post Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    e.target.reset();
                    navigate('/manageMyPost');

                }
            })
    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] w-full my-12'>
            <DynamicTitle></DynamicTitle>
            <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-2xl '>
                <h2 className='text-2xl font-bold text-center  text-gray-700 capitalize '>
                    Add Volunteer Post
                </h2>

                <form onSubmit={handleAdd} className="mx-auto">
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
                                <input type="text" name="Title" placeholder="Title" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Thumbnail Url</span>
                                </label>
                                <input type="text" name="Thumbnail" placeholder="Thumbnail Url" className="input input-bordered" required />
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Location</span>
                                </label>
                                <input type="text" name="Location" placeholder="Location" className="input input-bordered" required />
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
                                <input type="number" name="NoVolunteers" placeholder="No of Volunteers" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Deadline</span>
                                </label>
                                {/*                                     
                                    <input type="date" name="processingTime" placeholder="processing_time" className="input input-bordered" required /> */}
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy" className='input input-bordered w-full' />

                            </div>



                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Description</span>
                        </label>
                        <textarea type="text" name="description" rows={5} placeholder="Description" className="input input-bordered" required />
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
                    {/* Same as */}
                    <ToastContainer />
                </div>

            </section>
        </div>
    );
};

export default AddNeedVolunteer;
