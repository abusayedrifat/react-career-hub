import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    const featuredJobs = useLoaderData()
    return (
        <div >
            <Banner></Banner>
           <div className=" w-3/4 mx-auto">
           <CategoryList></CategoryList>
            <h1 className='text-5xl font-bold text-center mt-36'>Featured Jobs</h1>
            <div className="grid grid-cols-2 gap-8 my-20">
            {
                featuredJobs.map( jobs => <FeaturedJobs jobs={jobs}></FeaturedJobs>)
            }
            </div>
           </div>
        </div>
    );
};

export default Home;