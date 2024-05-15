import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../components/providers/AuthProvider';
import DatePicker from "react-datepicker";
// import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from 'react-helmet';
import { Fade } from 'react-awesome-reveal';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const BeVolunteer = () => {

    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();


    const [beVolunteer, setBeVolunteer] = useState({});

    useEffect(() => {
        fetch(`https://help-nexus-server.vercel.app/beVolunteer/${id}`)
            .then(res => res.json())
            .then(data => {
                setBeVolunteer(data);
                // console.log(data)
            })
    }, [id])

    // console.log(id,user.email,beVolunteer.email);
    // const [selectedCategory, setSelectedOption] = useState("React.js");
    // const [startDate, setStartDate] = useState(new Date());



    const handleUpdate = (e) => {
        e.preventDefault();
        if (user?.email === beVolunteer.email) {
            return Swal.fire({
                title: 'Warning!',
                text: 'You can\'t be a volunteer for your post',
                icon: 'warning',
                timer: 10000,
                confirmButtonText: 'Got It',
                hero: 'true' 
            });
            // return toast.error('You can\'t be a volunteer for your post')
        }


        const form = new FormData(e.currentTarget);

        const jobId = beVolunteer._id;
        const Thumbnail = beVolunteer.Thumbnail;
        const Title = beVolunteer.Title;
        const description = beVolunteer.description;
        const Location = beVolunteer.Location;
        const NoVolunteers = beVolunteer.NoVolunteers;
        const organizerName = beVolunteer.userName;
        const organizerEmail = beVolunteer.email;
        const selectedCategory = beVolunteer.selectedCategory;
        const startDate = beVolunteer.startDate;

        const volunteerName = user.displayName;
        const volunteerEmail = user.email;
        const Suggestion = form.get('Suggestion')
        const Status = "requested";



        const beVolunteerP = { jobId, organizerName, organizerEmail, Thumbnail, Title, description, Location, NoVolunteers, startDate, selectedCategory, volunteerName, volunteerEmail, Suggestion, Status }

        // console.log(beVolunteerP)


        fetch('https://help-nexus-server.vercel.app/beVolunteer', {
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
                    e.target.reset();


                    Swal.fire({
                        title: 'Success!',
                        text: 'Added Be a Volunteer Post Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    navigate('/manageMyPost')

                }
            })

    }




    return (
        <div hero className="min-h-screen hero-overlay bg-opacity-60" style={{ backgroundImage: 'url(https://i.ibb.co/x6XV8X9/re.jpg)' }}>
             <ToastContainer />
            <div className=''>
                <p data-aos="fade-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" className="text-3xl font-bold  text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-8 mt-6 mb-2 text-white"><Fade>Be Volunteer</Fade>
                </p>
            </div>

            <div className=' w-3/4 mx-auto pb-10   lg:text-left'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Be Volunteer</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>


                <section className='lg:px-10 pt-2 rounded-2xl pb-10 md:px-4 px-2 mt-10 mx-auto bg-white  shadow-2xl '>
                    {/* image info */}
                    <div className='text-center'>
                        {/* image  */}
                        <div className=" flex avatar  items-center justify-center">
                            <div className="w-52 mask mask-squircle">
                                <img src={beVolunteer.Thumbnail} />
                            </div>
                        </div>

                        <div className='inline-flex items-center mt-4 px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 text-yellow-500'>
                            <span className='h-1.5 w-1.5 rounded-full bg-yellow-500'></span>
                            <h2 className='text-sm font-normal '>requested</h2>
                        </div>

                        {/* title */}
                        <div>
                            <p className='text-2xl mt-2 font-bold'>Title: {beVolunteer.Title}</p>
                        </div>
                        {/* description */}
                        <div className='mb-8'>
                            <p>Description: {beVolunteer.description}</p>
                        </div>
                    </div>




                    {/* Organizer info */}
                    <div className=" ">
                        {/* name email */}
                        <div className='lg:flex'>
                            <div className="flex my-4  lg:w-1/2 items-center gap-4">
                                <p className=" font-bold text-lg">Organizer Name:</p>
                                <p>{beVolunteer.userName}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <p className="font-bold text-lg">Organizer Email:</p>
                                <p>{beVolunteer.email}</p>
                            </div>

                        </div>

                        <div className='lg:flex '>
                            <div className="flex my-4 lg:w-1/2 items-center gap-4">
                                <p className="font-bold text-lg">Category:</p>
                                <p>{beVolunteer.selectedCategory}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <p className="font-bold text-lg">Location:</p>
                                <p>{beVolunteer.Location}</p>
                            </div>

                        </div>
                        {/* dead line & no. v */}
                        <div className='lg:flex '>
                            <div className="flex my-4 lg:w-1/2 items-center gap-4">
                                <p className="font-bold text-lg">No of Volunteers:</p>
                                <p>{beVolunteer.NoVolunteers}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <p className="font-bold text-lg">Dead Line:</p>
                                <p>{new Date(beVolunteer.startDate).toLocaleDateString()}</p>
                            </div>

                        </div>
                    </div>

                    {/* Be Volunteers */}
                    <div>
                        <div className='lg:flex '>
                            <div className="flex my-4 lg:w-1/2 items-center gap-4">
                                <p className="font-bold text-lg">Volunteer Name:</p>
                                <p>{user.displayName}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <p className="font-bold text-lg" >Volunteer Email:</p>
                                <p>{user.email}</p>
                            </div>

                        </div>
                        {/* editable */}
                        <form onSubmit={handleUpdate} className="mx-auto">
                            <div>
                                <div className="form-control my-4 lg:mr-3">
                                    <label className="label">
                                        <span className="label-text font-bold">Suggestion:</span>
                                    </label>
                                    <input type="text" required name="Suggestion" placeholder="Suggestion" className="input input-bordered input-success"
                                    />
                                </div>

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Request</button>
                            </div>
                        </form>
                        {/* form */}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BeVolunteer;