// import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/providers/AuthProvider";
import DynamicTitle from "../../components/dynamicTitle/DynamicTitle";
// import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);

    const { createUser, setUser, updateUserProfile } = useContext(AuthContext);


    const navigate = useNavigate();


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { email, password, name, photoUrl } = data;
        console.log(name,email,password,photoUrl)


        // password check
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            toast.success("Password should be at least 6 characters or longer");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password have at least one uppercase character.')
            toast.success("Your password have at least one uppercase character.");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('')
            toast.success("Your password have at least one lowercase character.");
            return;
        }
        // register error reset
        setRegisterError('');
        setSuccess('');

        // create user
        // createUser(email, password, name, photoUrl)
        //     .then(result => {
        //         console.log(result.user);

        //     })
        //     .catch(error => {
        //         console.error(error);
        //         setRegisterError(error.message);
        //         toast.success(registerError);
        //     })

        // createUser.user.updateProfile({
        //     displayName: name,
        //     photoURL: photoUrl
        //   });

        
        // start
        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photoUrl)
                    .then(() => {
                        toast.success("Successfully Register");
                        // setUser(result.user)
                        
                        navigate('/')
                        window.location.reload();

                    })



            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
                toast.success("Fail to Register");
            })
    }




    
    return (
        <div className="mt-10">
            <DynamicTitle></DynamicTitle>
            <div>
                <div className="text-center lg:text-left">
                    <div className="flex justify-center items-center">
                        <h1 className="text-5xl font-bold"><Fade>Register!</Fade></h1>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/2 md:w-3/4 mx-auto">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="name" className="input input-bordered" required {...register("name", { required: true })} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required {...register("email", { required: true })} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="photoUrl" placeholder="photoUrl" className="input input-bordered" required {...register("photoUrl", { required: true })} />
                        </div>

                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPass ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required {...register("password", { required: true })} />

                            <span className="absolute right-2 bottom-12" onClick={() => setShowPass(!showPass)}>
                                {
                                    showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>


                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="flex justify-center items-center">
                        <p>All have an account ? <Link to="/login" className="text-blue-500 font-bold" >Login</Link></p>
                    </div>
                    <div>
                        {/* {
                            registerError && <p className="text-red-500 font-bold">{registerError}</p>
                        } */}
                        {/* {
                            success && <p className="text-blue-500 font-bold">{success}</p>
                        } */}
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
                </div>
            </div>
        </div>
    );
};


export default Register;