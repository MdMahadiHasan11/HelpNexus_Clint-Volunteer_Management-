import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../components/providers/AuthProvider';
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
import "react-datepicker/dist/react-datepicker.css";

const BeVolunteer = () => {

    const { id } = useParams();
    const { user } = useContext(AuthContext);


    const [beVolunteer, setBeVolunteer] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/beVolunteer/${id}`)
            .then(res => res.json())
            .then(data => {
                setBeVolunteer(data);
                console.log(data)
            })
    }, [id])

    // console.log(id,user.email,beVolunteer.email);
    // const [selectedCategory, setSelectedOption] = useState("React.js");
    // const [startDate, setStartDate] = useState(new Date());



    const handleUpdate = (e) => {

        console.log("hi")
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const Thumbnail = form.get('Thumbnail');
        const Title = form.get('Title');
        const description = form.get('description');
        const Location = form.get('Location')
        const NoVolunteers = form.get('NoVolunteers')
        const organizerName = form.get('organizerName')
        const organizerEmail = form.get('organizerEmail')
        const selectedCategory = form.get('category')
        const startDate = form.get('date')

        const volunteerName = user.displayName;
        const volunteerEmail = user.email;
        const Suggestion = form.get('Suggestion')
        const Status = form.get('Status')



        const beVolunteerP = { organizerName, organizerEmail, Thumbnail, Title, description, Location, NoVolunteers, startDate, selectedCategory, volunteerName, volunteerEmail, Suggestion, Status }

        console.log(beVolunteerP)


        fetch('http://localhost:5000/beVolunteer', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(beVolunteerP)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                    Swal.fire({
                        title: 'Success!',
                        text: 'Added Be a Volunteer Post Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    e.target.reset();

                }
            })

    }




    return (
        <div className='bg-slate-100 mt-10 text-center lg:text-left'>
            <section className='container  p-2 md:p-6 mx-auto bg-white rounded-md shadow-2xl '>
                <h2 className='text-2xl font-bold text-center  text-gray-700 capitalize '>
                    Be Volunteer  Post
                </h2>

                <form onSubmit={handleUpdate} className="mx-auto">
                    <div className="lg:flex">
                        <div className="lg:w-full lg:mr-4 ">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Organizer Name:</span>
                                </label>
                                <input type="text" name="organizerName" placeholder="Name" className="input " readOnly
                                    value={beVolunteer.userName} />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Title:</span>
                                </label>
                                <input type="text" name="Title" placeholder="Title" readOnly defaultValue={beVolunteer.Title} className="input " required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Thumbnail Url:</span>
                                </label>
                                <input type="text" name="Thumbnail" placeholder="Thumbnail Url" readOnly defaultValue={beVolunteer.Thumbnail} className="input " required />
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Location:</span>
                                </label>
                                <input type="text" name="Location" placeholder="Location" readOnly defaultValue={beVolunteer.Location} className="input " required />
                            </div>



                        </div>


                        <div className="lg:w-full">


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Organizer Email:</span>
                                </label>
                                <input type="text" name="organizerEmail" className="input " readOnly
                                    value={beVolunteer.email} />
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Category:</span>
                                </label>
                                <input type="text" name="category" className="input " readOnly
                                    value={beVolunteer.selectedCategory} />
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">No of Volunteers:</span>
                                </label>
                                <input type="number" name="NoVolunteers" placeholder="No of Volunteers" readOnly defaultValue={beVolunteer.NoVolunteers} className="input" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Dead Line:</span>
                                </label>
                                <input type="text" name="date" className="input " readOnly
                                    value={beVolunteer.startDate} />
                            </div>



                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Description:</span>
                        </label>
                        <textarea type="text" name="description" rows={5} placeholder="Description" readOnly defaultValue={beVolunteer.description} className="input input-bordered" required />
                    </div>

                    {/* editable */}
                    <div>
                        <div className='lg:flex'>
                            <div className="form-control lg:mr-3 lg:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold">Volunteer Name:</span>
                                </label>
                                <input type="text" name="volunteerName" placeholder="Name" className="input" readOnly
                                    value={user.displayName} />
                            </div>
                            <div className="form-control lg:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold">Volunteer Email</span>
                                </label>
                                <input type="text" name="volunteerEmail" placeholder="Name" className="input" readOnly
                                    value={user.email} />
                            </div>
                        </div>
                        <div className='lg:flex'>
                            <div className="form-control lg:mr-3 lg:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold">Suggestion:</span>
                                </label>
                                <input type="text" name="Suggestion" placeholder="Suggestion" className="input input-bordered"
                                />
                            </div>
                            <div className="form-control lg:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold">Status</span>
                                </label>
                                <input type="text" name="Status" placeholder="Status" className="input" readOnly
                                    value="requested" />
                            </div>
                        </div>

                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Request</button>
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

export default BeVolunteer;