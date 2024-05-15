 import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/mainimage.svg'
import { FaUser } from 'react-icons/fa';
import {   useEffect, useState } from 'react';
import useAuth from '../Hook/useAuth/useAuth';
// import toltip
import 'react-tooltip/dist/react-tooltip.css'
import axios from 'axios';

const Navbar = ({children}) => {
  const {user,logout} = useAuth();



 



  const[theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  const handleToggle =(e)=>{
    if(e.target.checked){
      setTheme("dark");
    }else{
      setTheme("light");
    }
   }



  useEffect(()=>{
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme)
  }, [theme]);

 
  
 
 
  const menu =<>
  <li > <NavLink to={'/'} className={({ isActive }) =>
                isActive ? " text-green-500 font-bold border-b-2 border-red-500" : "font-semibold"
              }>Home</NavLink> </li>
          <li> <NavLink to={'/alljob'}   className={({ isActive }) =>
                        isActive ? " text-green-500 font-bold border-b-2 border-red-700" : "font-semibold"
                      } >All Jobs</NavLink> </li>
  <li> <NavLink to={'/jobapplied'}   className={({ isActive }) =>
                isActive ? " text-green-500 font-bold border-b-2 border-red-700" : "font-semibold"
              }>Applied Jobs</NavLink> </li>
  <li> <NavLink to={'/addjob'} className={({ isActive }) =>
                isActive ? " text-green-500 font-bold border-b-2 border-red-700" : "font-semibold"
              }>Add A Jobs</NavLink> </li>
  <li> <NavLink to={'/myjob'}  className={({ isActive }) =>
                isActive ? " text-green-500 font-bold border-b-2 border-red-700" : "font-semibold"
              }>My Jobs</NavLink> </li>
  <li> <NavLink to={'/blog'} className={({ isActive }) =>
                        isActive ? " text-green-500 font-bold border-b-2 border-red-700" : "font-semibold"
                      }>Blogs </NavLink> </li>
   
  </>
    const [navs, setNavs] = useState(false);

   useEffect(()=>{
    const handleScroolBtn = () =>{
 
      if(window.scrollY > 72){
       setNavs(true)
      }
      else{
       setNavs(false)
      }


 }


 window.addEventListener('scroll', handleScroolBtn);
 
 

   },[])


 



   const handleLogutBtn =() =>{
    // console.log('alhamdulillah your logut button is now working');
    logout()
    .then(result =>{
      // console.log(result.user);
      // console.log('alhamulillah sucesfully logout user ');
      
    })
    .catch(error =>{
          console.error(error)
    })
}

 



    return (
      <div className={` ${navs && theme==='light' ? 'bg-white fixed z-50 w-full  text-black shadow-md   transition-colors duration-300' : ' text-white fixed z-50 w-full shadow-md   transition-colors duration-300' }` }>
                  <div className=' flex py-4  '>
           <div className="navbar  w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <div>
    
      </div>
      <ul tabIndex={0} className="menu  flex font-poppin gap-3 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

      {menu}
      </ul>
    </div>

 <div   >
    <img   src={logo} alt="" />
 </div>
 <div>
 <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onChange={handleToggle} />
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
 </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className={`menu-horizontal flex gap-7  text-xl  font-poppin font-medium    px-1${navs ? 'text-black opacity-1 ' : 'text-white opacity-0'} ` }>
    {menu}
    </ul>
  </div>
  <div className="navbar-end flex gap-4 ">
    {
      user ? (  <>
      
            <div className="avatar" title={user?.displayName ? user?.displayName : <p> Not Found Name</p>}>
  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={user?.photoURL}/>
  </div>
</div>
        <Link  onClick={handleLogutBtn}>
      <a className="md:p-4 p-2 text-sm md:text-xl cursor-pointer rounded-lg bg-green-500 text-white font-semibold flex gap-2 items-center justify-center"><span><FaUser /></span>Logout</a></Link>

      </>
      
    ) : (    <Link  to={'/login'}>
    <a className="md:p-4 p-2 text-sm md:text-xl cursor-pointer rounded-lg bg-green-500 text-white font-semibold flex gap-2 items-center justify-center"><span><FaUser /></span>Login</a></Link>)
    }
  


    
    <Link to={'/singup'}>
    <a className="md:p-4 p-2 text-sm md:text-xl cursor-pointer rounded-lg bg-[#0B4127] text-white font-semibold flex gap-2 items-center justify-center"><span><FaUser /></span>SingUp </a></Link>

  </div>
</div>
        </div>
      </div>

    );



 
};

export default Navbar;