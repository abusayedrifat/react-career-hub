import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import { useState } from "react";

const Home = () => {
    const featuredJobs = useLoaderData()

    const [showJobs, setShowJobs] = useState(4);
    return (
        <div >
            <Banner></Banner>
           <div className=" w-3/4 mx-auto">
           <CategoryList></CategoryList>
            <h1 className='text-5xl font-bold text-center mt-36'>Featured Jobs</h1>
            <div className="grid grid-cols-2 gap-5 my-20">
            {
                featuredJobs.slice(0, showJobs).map( jobs => <FeaturedJobs jobs={jobs}></FeaturedJobs>)
            }
            </div>
            <div className={showJobs === featuredJobs.length && 'hidden'}>
            <button onClick={()=> setShowJobs(featuredJobs.length)} className="btn mb-28 relative left-[50%] -translate-x-[50%] bg-gradient-to-r from-[#9873ff] to-[#7e8ffe] text-white">Show All</button>
            </div>
           </div>
        </div>
    );
};

export default Home;