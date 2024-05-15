// import React from 'react';
// import React from "react";
// import Lottie, { useLottie } from "lottie-react";
// import groovyWalkAnimation from "./groovyWalk.json";
import { Fade } from "react-awesome-reveal";
import { Tooltip } from 'react-tooltip';
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { AuthContext } from "../../providers/AuthProvider";
// import app from "../../firebase/firebase.config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import app from "../../firebase/firebase.config";
import { AuthContext } from "../../components/providers/AuthProvider";
import DynamicTitle from "../../components/dynamicTitle/DynamicTitle";

const Login = () => {


    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const auth = getAuth(app)


    const googleProvider = new GoogleAuthProvider();

    const { googleSignIn } = useContext(AuthContext);

    const HandleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loginUser = result.user;
                toast.success("Successfully Login");
                // console.log(loginUser)
                setUser(loginUser);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')

        // console.log(email)
        // console.log(password)



        signIn(email, password)
            .then(result => {
                toast.success("Successfully Login");
                // console.log(result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);
                toast.success("password or email not matching!!");
            })

    }



    return (
        // <Fade>Login now!</Fade>
        <div hero className="min-h-screen hero-overlay bg-opacity-60" style={{ backgroundImage: 'url(https://i.ibb.co/SNC9bdz/login.jpg)' }}>

            {/* title */}
            <div className='mt-10'>
                <p data-aos="fade-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" className="text-3xl font-bold  text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-8 mt-6 mb-2 text-white"><Fade>Login now!</Fade>
                </p>
            </div>




            <DynamicTitle></DynamicTitle>
            <div className="  mt-10 pb-10 justify-center items-center min-h-[calc(100vh-306px)] w-full">
                <div className=" p-2 md:p-6 mx-auto bg-white rounded-md w-1/2 shadow-2xl ">


                    <div className="text-center lg:text-left">
                        <div className="flex justify-center items-center"
                        ><h1 className="text-5xl font-bold"></h1>
                            {/* <Lottie animationData={groovyWalkAnimation} loop={true} />; */}
                        </div>



                        <form onSubmit={handleLogin} className="w-3/4 mx-auto">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary font-bold">Login</button>
                            </div>
                        </form>
                        <div className="flex justify-center items-center"
                        ><p>Don`t have an account ? <Link to="/register" className="text-blue-500 font-bold" >Register</Link></p></div>

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
                    </div>
                    <hr className="border-t border-gray-300 my-4" />

                    <div className="text-center">
                        <div>
                            <p className="mt-5 mb-3">Or Sign up using</p>
                        </div>
                        <button onClick={HandleGoogleLogin} data-tooltip-id="my-tooltipp" className=" text-3xl btn m-4">
                            <FcGoogle />
                        </button>
                        <Tooltip
                            id="my-tooltipp"
                            content="Google Login"
                            events={['hover']}
                        />
                        {/* <button onClick={HandleGithubLogin} data-tooltip-id="my-tooltip" className=" text-3xl btn ">
                        <BsGithub />

                    </button> */}
                        <Tooltip
                            id="my-tooltip"
                            content="GitHub Login"
                            events={['hover']}
                        />
                        {/* {user && <div>
                        <p>user: {user.displayName}</p>
                    </div>} */}

                    </div>

                </div>




            </div>


        </div>
    );
};
export default Login;