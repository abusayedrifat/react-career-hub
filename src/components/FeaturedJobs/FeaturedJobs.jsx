import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './FeaturedJobs.css'

const FeaturedJobs = ({jobs}) => {
    const {id, logo, job_title,company_name,remote_or_onsite,location,job_type,salary,job_description} = jobs;

    return (
        <div className='p-8 border border-[#75757568] rounded-lg space-y-2'>
            <figure><img src={logo} className='w-[30%]' alt="" /></figure>
            <h2 className='text-lg font-bold'> {job_title} </h2>
            <p> {company_name} </p>
            <div className='flex gap-6'>
                <button className='btn btn-sm btn-outline btn-primary'> {remote_or_onsite} </button>
                <button className='btn btn-sm btn-outline btn-primary'> {job_type} </button>
            </div>
            <div className='flex gap-5 py-5'>
            <div className='flex gap-1'> 
            <img src="/src/assets/icons/Location.png" alt="" />
             <p> {location} </p>
             </div>
            <div className='flex gap-1'> <img src="/src/assets/icons/money.png" alt="" /> <p> {salary} </p></div>
            
            </div>
            <Link to={`/featuredJob/${id}`}><button  className='btn bg-gradient-to-r from-[#9873ff] to-[#7e8ffe] text-white'> View Details </button></Link>
        </div>
    );
};

export default FeaturedJobs;