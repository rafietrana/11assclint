import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/mainimage.svg";
import useAuth from "../../Hook/useAuth/useAuth";
import { useEffect, useState } from "react";

const NabBarAll = () => {
  const { user, logout } = useAuth();

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/alljob", label: "All Jobs" },
    { path: "/jobapplied", label: "Applied Jobs" },
    { path: "/addjob", label: "Add Job" },
    { path: "/myjob", label: "My Jobs" },
    { path: "/blog", label: "Blogs" },
  ];

  const menu = (
    <>
      {menuItems.map(({ path, label }) => (
        <li key={path}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              `transition duration-300 hover:text-green-500 ${
                isActive ? "text-green-500 border-b-2 border-green-500" : ""
              }`
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
    </>
  );

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-md">
      <div className="navbar w-11/12 mx-auto py-3">
        {/* Navbar Left */}
        <div className="navbar-start flex items-center gap-3">
          {/* Mobile menu */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="ml-2">
            <img src={logo} alt="logo" className="w-[110px]" />
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 text-lg font-medium">
            {menu}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <div className="flex items-center gap-3 min-w-[260px] justify-end">
            {/* Theme Toggle */}
            <input
              type="checkbox"
              className="toggle toggle-success toggle-sm"
              onChange={handleToggle}
              checked={theme === "dark"}
            />

            {/* User section */}
            {user ? (
              <>
                {/* Avatar */}
                <div
                  className="avatar tooltip tooltip-bottom"
                  data-tip={user?.displayName || "User"}
                >
                  <div className="w-9 rounded-full ring ring-success ring-offset-2">
                    <img src={user?.photoURL} alt="user" />
                  </div>
                </div>

                {/* Logout */}
                <button
                  onClick={logout}
                  className="btn btn-sm btn-outline btn-error h-9 flex items-center gap-1"
                >
                  <FaUser /> Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-sm btn-outline h-9 flex items-center gap-1"
                >
                  <FaUser /> Login
                </Link>

                <Link
                  to="/singup"
                  className="btn btn-sm btn-success text-white h-9 flex items-center gap-1"
                >
                  <FaUser /> Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NabBarAll;
