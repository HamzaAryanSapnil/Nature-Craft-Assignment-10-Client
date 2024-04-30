import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/Use Auth Context/UseAuthContext";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  console.log(user);

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allartandcraftitems"}>All Art And Craft Items</NavLink>
      </li>
      {user ? (
        <>
          {" "}
          <li>
            {" "}
            <NavLink to={"/addCraftItem"}>Add Craft Item</NavLink>
          </li>
          <li>
            <NavLink to={"/myArtAndCraftList"}>My Art And Craft List</NavLink>
          </li>
        </>
      ) : (
        <li>
          <NavLink to={"/register"}>Register</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 my-5">
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
        <a className="btn btn-ghost text-xl">NatureCraft</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* navlinks here */ navLinks}
        </ul>
      </div>
      {user ? (
          <div className="navbar-end">
            <div
            data-tooltip-id="my-tooltip"
            data-tooltip-content={user?.displayName ? user?.displayName : "User"}
            data-tooltip-place="top"
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar "
              // data-tip={user?.displayName ? user?.displayName : "User"}
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                  }
                />
              </div>
            </div>
            <button
              onClick={handleLogOut}
              className="sticky btn text-error btn-outline btn-error font-medium "
            >
              SignOut
            </button>
          </div>
        ) : (
          <div className="navbar-end">
            <Link
              to="/login"
              className="btn  btn-outline bg-signBtn text-white font-bold"
            >
              Login
            </Link>
          </div>
        )}
        <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Navbar;
