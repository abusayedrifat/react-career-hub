import React from 'react';
import { NavLink } from 'react-router-dom';
import './FeaturedJobs.css'

const FeaturedJobs = ({jobs}) => {
    const {logo, job_title,company_name,remote_or_onsite,location,job_type,salary,job_description} = jobs
    return (
        <div className='p-8 border border-[] rounded space-y-2'>
            <img src={logo} className='w-[30%]' alt="" />
            <h2 className='text-lg font-bold'> {job_title} </h2>
            <p> {company_name} </p>
            <div className='flex gap-6'>
                <button className='btn btn-sm btn-outline btn-primary'> {remote_or_onsite} </button>
                <button className='btn btn-sm btn-outline btn-primary'> {job_type} </button>
            </div>
            <div className='flex gap-5  mt-5'>
            <div className='flex gap-1'> 
            <img src="/src/assets/icons/Location.png" alt="" />
             <p> {location} </p>
             </div>
            <div className='flex gap-1'> <img src="/src/assets/icons/money.png" alt="" /> <p> {salary} </p></div>
            
            </div>
            <button className='btn bg-gradient-to-r from-[#9873ff] to-[#7e8ffe] text-white'> <NavLink> View Details </NavLink> </button>
        </div>
    );
};

export default FeaturedJobs;