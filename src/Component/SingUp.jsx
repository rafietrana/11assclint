import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import axios from "axios";

import NabBarAll from "../Shyred/NabBarAll/NabBarAll";
import useAuth from "../Hook/useAuth/useAuth";

const SignUp = () => {
  const { createUser, updateUserInfo, user } = useAuth();

  const handleSignUpBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    createUser(email, password)
      .then(() => {
        toast.success("Successfully created user ✔😊");
        updateUserInfo(name, photo);

        const loggedUser = { email: user?.email };
        axios.post("http://localhost:5000/jwt", loggedUser, {
          withCredentials: true,
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Sign up failed 😢");
      });
  };

  return (
    <>
      <NabBarAll />

      <div
        className={`min-h-screen flex items-center justify-center px-4  transition-colors duration-500`}
      >
        <div className="w-full max-w-md lg:max-w-lg  rounded-xl border overflow-hidden transition-colors duration-300">
          {/* Header */}
          <div className="py-6 px-8 border-b   text-center">
            <h2 className="text-2xl font-bold   uppercase drop-shadow-sm">
              Sign Up Now
            </h2>
          </div>

          <div className="px-8 py-6 space-y-6">
            <form onSubmit={handleSignUpBtn} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium  ">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full px-4 py-2 rounded-lg  border focus:ring-2   focus:ring-green-400 focus:outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium  ">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full px-4 py-2 rounded-lg   focus:ring-2 focus:ring-green-400 focus:outline-none transition-colors duration-300"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium  "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  className="mt-1 block w-full px-4 py-2 rounded-lg   focus:ring-2 focus:ring-green-400 focus:outline-none transition-colors duration-300"
                  placeholder="********"
                />
              </div>

              <div>
                <label htmlFor="photo" className="block text-sm font-medium  ">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  id="photo"
                  required
                  className="mt-1 block w-full px-4 py-2 rounded-lg   focus:ring-2 focus:ring-green-400 focus:outline-none transition-colors duration-300"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
              >
                Sign Up
              </button>
            </form>

            <div className="flex items-center justify-center mt-4 text-sm  ">
              Already have an account?{" "}
              <Link to="/login" className="ml-1   hover:underline">
                Login Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
