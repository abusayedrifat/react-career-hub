import './Banner.css'
const Banner = () => {
    return (
      <div className='bg-gradient-to-r from-[#9873ff19] to-[#7e8ffe1a]  mb-28'>
          <div className=" flex justify-between items-center w-3/4 mx-auto">
            <div className='space-y-6'>
                <h1 className="text-6xl font-extrabold leading-[80px]">
                One Step <br /> Closer To Your <br /> <span className="dream-job">Dream Job</span>
                </h1>
                <p className='w-[500px]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn bg-gradient-to-r from-[#9873ff] to-[#7e8ffe] text-white'>Get Started</button>
            </div>
          <div>
         
            <img src="/src/assets/images/user.png" className=' w-[80%] ml-32'  alt="" />
         
          </div>
        </div>
      </div>
    );
};

export default Banner;