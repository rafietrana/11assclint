import { Link } from "react-router-dom";
import NabBarAll from "../../Shyred/NabBarAll/NabBarAll";
import useAuth from "../../Hook/useAuth/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const { loginUser,  googleLogin } = useAuth();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        toast.success("Successfully logged in with Google 😊");
        console.log(result);
        
      })
      .catch((error) => {
        console.error(error);
        toast.error("Google login failed 😣");
      });
  };

  const handleLoginBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        toast.success("Successfully logged in user 😊");
        console.log(result);
        
      })
      .catch((error) => {
        console.error(error);
        toast.error("Login failed 😣");
      });
  };

  return (
    <>
      <NabBarAll />
      <div className="min-h-screen flex items-center justify-center   px-4">
        <div className="w-full max-w-md lg:max-w-lg     rounded-xl  border overflow-hidden">
          {/* Header */}
          <div className="py-6 px-8 border-b    text-center">
            <h2 className="text-2xl font-bold    uppercase">
              Login Now
            </h2>
          </div>

          <div className="px-8 py-6 space-y-6">
            {/* Google Login */}
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border rounded-lg   transition duration-300"
            >
          
              <span className="font-semibold   ">
                Sign in with Google
              </span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-2 ">
              <span className="flex-1 border-b"></span>
              <span className="uppercase text-xs font-semibold">
                or login with email
              </span>
              <span className="flex-1 border-b"></span>
            </div>

            {/* Email & Password Form */}
            <form onSubmit={handleLoginBtn} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium  "
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
            className="mt-1 block w-full px-4 py-2 rounded-lg  border focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium    "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  className="mt-1 block w-full px-4 py-2 rounded-lg  border focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
              >
                Login Now
              </button>
            </form>

            {/* Signup link */}
            <div className="flex items-center justify-center mt-4 text-sm    ">
              Dont have an account?{" "}
              <Link
                to="/singup"
                className="ml-1 text-green-500 hover:underline"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
