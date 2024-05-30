import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/mainimage.svg'
import useAuth from "../../Hook/useAuth/useAuth";
import { useEffect, useState } from "react";

 

const NabBarAll = () => {
   const {user, logout} = useAuth();
// console.log('user photo', user?.photoURL);

const menu =<>
<li > <NavLink to={'/'} className={({ isActive }) =>
              isActive ? " text-green-500  border-b-2 border-red-500" : ""
            }>Home</NavLink> </li>
        <li> <NavLink to={'/alljob'}   className={({ isActive }) =>
                      isActive ? " text-green-500  border-b-2 border-red-700" : ""
                    } >All Jobs</NavLink> </li>
<li> <NavLink to={'/jobapplied'}   className={({ isActive }) =>
              isActive ? " text-green-500  border-b-2 border-red-700" : ""
            }>Applied Jobs</NavLink> </li>
<li> <NavLink to={'/addjob'} className={({ isActive }) =>
              isActive ? " text-green-500  border-b-2 border-red-700" : ""
            }>Add A Jobs</NavLink> </li>
<li> <NavLink to={'/myjob'}  className={({ isActive }) =>
              isActive ? " text-green-500  border-b-2 border-red-700" : ""
            }>My Jobs</NavLink> </li>
<li> <NavLink to={'/blog'} className={({ isActive }) =>
                      isActive ? " text-green-500  border-b-2 border-red-700" : ""
                    }>Blogs </NavLink> </li>
 
</>



const[theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");


useEffect(()=>{
  localStorage.setItem("theme", theme);
  const localTheme = localStorage.getItem("theme");
  document.querySelector("html").setAttribute("data-theme", localTheme)
}, [theme]);



const handleToggle =(e)=>{
  if(e.target.checked){
    setTheme("dark");
  }else{
    setTheme("light");
  }
 }

const handleLogutBtn =() =>{
    // console.log('alhamdulillah your logut button is now working');
    logout();

}

    return (
        <div  className="`bg-white shadow-md  {}" >
        <div className=' flex py-4  '>
 <div className="navbar  w-10/12 mx-auto">
<div className="navbar-start">
<div className="dropdown">
<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
</div>
<ul tabIndex={0} className="menu  flex font-poppin gap-3 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

{menu}
</ul>
</div>

<div className="w-[100px]">
<img  className="" src={logo} alt="" />
</div>
 
</div>

<div className="navbar-center hidden lg:flex">
<ul className={`menu-horizontal flex gap-7  text-xl  font-poppin font-medium    px-1 ` }>
{menu}
</ul>
</div>
<div className="navbar-end flex gap-4 ">
{
      user ? ( <>
<div className="avatar" title={user?.displayName ? user?.displayName : <p> Not Found Name</p>}>
  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={user?.photoURL} />
  </div>
</div>
 
    <Link  onClick={handleLogutBtn}>
  <a className="btn btn-sm"><span><FaUser /></span>Logout</a></Link>

  </>) : (    <Link  to={'/login'}>
    <a  className="btn btn-sm"><span><FaUser /></span>Login</a></Link>)
    }



<Link to={'/singup'}>
<a  className="btn btn-sm"><span><FaUser /></span>SingUp </a></Link>

</div>
</div>
</div>
</div>
    );
};

export default NabBarAll;