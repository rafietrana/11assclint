import { Link } from "react-router-dom";
import NabBarAll from "../Shyred/NabBarAll/NabBarAll";
import useAuth from "../Hook/useAuth/useAuth";
import { toast } from "react-toastify";
 

const SignUp = () => {


    const {createUser, updateUserInfo} = useAuth();
 

     const handleSingUpBtn = (e) =>{
           e.preventDefault();
            const form = e.target;
            const name = form.name?.value;
            const email = form.email?.value;
            const password = form.password?.value;
            const photo = form.photo?.value;
            console.log(name, email, password, photo);



            createUser(email, password)
            .then(result =>{
                console.log(result.user);
                toast.success(' sucesfully created users✔😊👌')
                // update user
                updateUserInfo(name, email)
 
            
            })
            .catch(error =>{
             console.error(error)
               toast.error('Not Created SucessFully😢😭')
            })



     }


    return (
        <div>
            <NabBarAll></NabBarAll>
            
            <section className="bg-white dark:bg-gray-900">
                <div className="container flex flex-col items-center justify-center min-h-screen px-6 mx-auto">
                    <form onSubmit={handleSingUpBtn} className="w-full max-w-md">

                        <div className="flex items-center justify-center mt-6">
 
    
                            <p href="#" className="w-1/3 pb-4 font-medium text-center text-gray-800  border-b-2 border-blue-500 dark:border-blue-400 dark:text-white text-xl  uppercase">
                                sign up Now
                            </p>
                        </div>
    
                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
    
                            <input type="text" name="name" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Name" required/>
                        </div>
                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
    
                            <input type="email" name="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email" required />
                        </div>
                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
    
                            <input type="password" name="password" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" required />
                        </div>
                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
    
                            <input type="text" name="photo" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Phot Url" required />
                        </div>
 
    
                        {/* Other input fields */}
    
                        <div className="mt-6">
                            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Sign Up
                            </button>
    

                        </div>
                    </form>
                    <div>
                                                <div className="mt-6 text-center ">
                                   <p>Already Have an Account? <Link to={'/login'} className="text-red-500">Login Now</Link></p>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;
