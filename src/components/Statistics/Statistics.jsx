import { useLoaderData } from "react-router-dom";
import Banner2 from "../Banner2/Banner2";

const Statistics = () => {

    const jobDetails = useLoaderData();

    const {job_title, salary, experiences, contact_information, educational_requirements, job_responsibility, job_description} = jobDetails;
    return (
        <div>
            <Banner2></Banner2>
            <h2 className="text-center font-bold text-4xl relative lg:-top-[150px]">Job details</h2>
            <div className="flex justify-between items-center">
                <div>
                    <p><span>Job Description : {job_description} </span></p>
                    <p> <span>Job responsibility :</span> {job_responsibility}  </p>
                    <p><span>Educational Requirments : <br /></span> {educational_requirements} </p>
                    <p><span>Experiences : </span> <br />
                    {experiences}
                     </p>

                </div>
                <div>
                       
                </div>

            </div>
        </div>
    );
};

export default Statistics;