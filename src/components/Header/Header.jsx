import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    const links = 
    <>
    <li><NavLink to='/home'>Home</NavLink></li>
    <li><NavLink to='/statistics'>Statistics</NavLink></li>
    <li><NavLink to='/appliedJob'>Applied Jobs</NavLink></li>
    <li><NavLink to='/blog'>Blog</NavLink></li>
    </>
    return (
        <div>
            <nav>
            <div className="navbar px-44 bg-base-100 bg-gradient-to-r from-[#9873ff19] to-[#7e8ffe1a]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
        
      </ul>
    </div>
    
    <a className="btn btn-ghost text-xl">CareerHub</a>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-6">
        {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn z-50">Start Applying</a> 
  </div>
</div>
            </nav>
        </div>
    );
};

export default Header;