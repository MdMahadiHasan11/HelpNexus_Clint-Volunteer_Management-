import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center flex flex-col justify-center items-center">
            <p>ooops!!!</p>
            <p className="my-7">404 not found</p>
            <Link to="/"><button className="btn">Back To Home</button></Link>
            
        </div>
    );
};

export default ErrorPage;