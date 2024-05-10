 import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/mainimage.svg'
import { FaUser } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import useAuth from '../Hook/useAuth/useAuth';
// import toltip
import 'react-tooltip/dist/react-tooltip.css'

const Navbar = () => {
  const {user,logout} = useAuth();



  console.log('now user value is ', user);


 
 
    const menu =<>
        <li > <NavLink to={'/'}>Home</NavLink> </li>
        <li> <NavLink>All Jobs</NavLink> </li>
        <li> <NavLink>Applied Jobs</NavLink> </li>
        <li> <NavLink>Add A Jobs</NavLink> </li>
        <li> <NavLink>My Jobs</NavLink> </li>
 
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
    console.log('alhamdulillah your logut button is now working');
    logout()
    .then(result =>{
      console.log(result.user);
      console.log('alhamulillah sucesfully logout user ');
    })
    .catch(error =>{
          console.error(error)
    })
}


 



    return (
      <div className={`fixed z-50 w-full ${navs ? 'bg-white shadow-md   transition-colors duration-300' : ''}` }>
                  <div className=' flex py-4  '>
           <div className="navbar  w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu  flex font-poppin gap-3 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

      {menu}
      </ul>
    </div>

 <div>
    <img src={logo} alt="" />
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