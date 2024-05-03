import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    const featuredJobs = useLoaderData()
    return (
        <div className=" w-3/4 mx-auto">
            <Banner></Banner>
            <CategoryList></CategoryList>
            <h1 className='text-5xl font-bold text-center'>Featured Jobs</h1>
            <div className="grid grid-cols-2 gap-8">
            {
                featuredJobs.map( jobs => <FeaturedJobs jobs={jobs}></FeaturedJobs>)
            }
            </div>
        </div>
    );
};

export default Home;