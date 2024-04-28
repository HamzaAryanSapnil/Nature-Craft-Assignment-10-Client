import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allartandcraftitems"}>All Art And Craft Items</NavLink>
      </li>
      <li>
        <NavLink to={"/addcraftitem"}>Add Craft Item</NavLink>
      </li>
      <li>
        <NavLink to={"/myartandcraftlist"}>My Art And Craft List</NavLink>
      </li>
      <li>
        <NavLink to={"/register"}>Register</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* nav links here */ navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* navlinks here */ navLinks}
        </ul>
      </div>
      {user ? (
        <div className="navbar-end">

          <Link to={"/"}>
            <button className="btn" >Logout</button>
          </Link>
        </div>
      ) : (
        <div className="navbar-end">
          <Link to={"/login"} className="btn">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
