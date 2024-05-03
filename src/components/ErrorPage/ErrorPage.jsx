import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center font-bold bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl absolute">
            <h1>Oops! This site can't be found</h1>
            <button className="btn mt-10"><NavLink to='/'>Go back</NavLink></button>
        </div>
    );
};

export default ErrorPage;