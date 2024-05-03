import React from 'react';
import { NavLink } from 'react-router-dom';
import './FeaturedJobs.css'

const FeaturedJobs = ({jobs}) => {
    const {logo, job_title,company_name,remote_or_onsite,location,job_type,salary,job_description} = jobs
    return (
        <div className='p-8 border border-[] rounded space-y-2'>
            <img src={logo} className='w-[20%]' alt="" />
            <h2 className='text-lg font-bold'> {job_title} </h2>
            <p> {company_name} </p>
            <div className='flex gap-6'>
                <button className='btn btn-sm btn-outline btn-primary'> {remote_or_onsite} </button>
                <button className='btn btn-sm btn-outline btn-primary'> {job_type} </button>
            </div>
            <div className='flex gap-5'>
            <p> {location} </p>
            <p> {salary} </p>
            </div>
            <button className='btn btn-outline btn-primary'> <NavLink> View Details </NavLink> </button>
        </div>
    );
};

export default FeaturedJobs;