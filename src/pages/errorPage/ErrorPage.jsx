import { Link } from "react-router-dom";
import errorImage from '../../../public/image/223663-P1NGJ7-863.jpg'


const ErrorPage = () => {
    return (
        <div className="text-center flex flex-col justify-center items-center">
            <p className="text-3xl mt-8 font-extrabold">ooops!!!</p>
            <p className=" font-extrabold my-7">404 not found</p>
            <div className="flex justify-center items-center mb-6" >
                <img className="h-[350px]" src={errorImage} alt="" />
            </div>
            <Link to="/"><button className="btn btn-secondary">Back To Home</button></Link>

        </div>
    );
};

export default ErrorPage;