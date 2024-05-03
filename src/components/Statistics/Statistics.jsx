import { useLoaderData, useParams } from "react-router-dom";
import Banner2 from "../Banner2/Banner2";
import './Statitsics.css'
const Statistics = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const currentJob = jobs.find(job => job.id == idInt)

    console.log(currentJob, id);
    const {job_title, salary, experiences, contact_information, educational_requirements, job_responsibility, job_description} = currentJob;
    return (
        <div>
            <Banner2></Banner2>
            <h2 className="text-center font-bold text-4xl relative lg:-top-[150px]">Job details</h2>
            <div className="flex gap-10 justify-between w-3/4 mx-auto my-20">
                <div className="w-2/3  space-y-6">
                    <p><span>Job Description : </span>{job_description}</p>
                    <p> <span>Job responsibility :</span> {job_responsibility}  </p>
                    <p><span>Educational Requirments : <br /></span> {educational_requirements} </p>
                    <p><span>Experiences : </span> <br />
                    {experiences}
                     </p>

                </div>
               <div>
               <div className="p-7 rounded bg-gradient-to-r from-[#9873ff19] to-[#7e8ffe1a] space-y-5">
            <span>Job Details</span>
            <hr />
            <p className="flex items-center gap-5"> <img src="/src/assets/icons/money.png" alt="" /> <span>Salary :</span> {salary} </p>
            <p className="flex items-center gap-5"> <img src="/src/assets/icons/calendar.png" alt="" /> <span>Job Title :</span> {job_title} </p>
            <span className="mt-8">Contact Information </span>
            <hr />
            <p className="flex items-center gap-5"> <img src="/src/assets/icons/phone.png" alt="" /> <span>Phone :</span> {contact_information.phone} </p>
            <p className="flex items-center gap-5"> <img src="/src/assets/icons/email.png" alt="" /> <span>Email :</span> {contact_information.email} </p>
            <p className="flex gap-5"> <img src="/src/assets/icons/location2.png" alt="" className="w-[10%]" /> <span>Address : </span>{contact_information.address} </p>
              
                </div>
                <button className="btn bg-gradient-to-r from-[#9873ff] to-[#7e8ffe] text-white w-full mt-7">Apply now</button>
               </div>

            </div>
        </div>
    );
};

export default Statistics;