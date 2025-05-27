import { User, Code, LogOut } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const { authUser } = useAuthStore();
  console.log("AUTH_USER", authUser);

  return (
 <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-stone-900 to-purple-900 shadow-lg shadow-purple-900/50 rounded-2xl">
  <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto px-6 py-4">
    {/* Logo Section */}
    <Link
      to="/"
      className="flex items-center gap-3 cursor-pointer select-none"
    >
      <img
        src="/leetlab.svg"
        alt="Logo"
        className="h-12 w-12 bg-primary/20 text-primary border-none px-2 py-2 rounded-full"
      />
      <span className="text-lg md:text-2xl font-bold tracking-tight text-orange-500">
        CodeCracker
      </span>
    </Link>

    {/* User Profile and Dropdown */}
    <div className="flex items-center gap-6">
      <div className="dropdown dropdown-end">
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle avatar flex flex-row hover:bg-purple-700/40 transition-colors duration-300"
        >
          <div className="w-10 rounded-full border-2 border-orange-500 overflow-hidden">
            <img
              src={
                authUser?.image ||
                "https://avatar.iran.liara.run/public/boy"
              }
              alt="User Avatar"
              className="object-cover"
            />
          </div>
        </label>
         <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-3"
            >
              {/* Admin Option */}
             

              {/* Common Options */}
              <li>
                <p className="text-base font-semibold">
                 
                  {authUser?.name?.toUpperCase()}

                </p>
                <hr className="border-gray-200/10" />
              </li>
              <li>
                <Link
                  to="/profile"
                  className="hover:bg-orange-500 hover:text-white text-base font-semibold"
                >
                  <User className="w-4 h-4 mr-2" />
                  My Profile
                </Link>
              </li>
              {authUser?.role === "ADMIN" && (
                <li>
                  <Link
                    to="/add-problem"
                    className="hover:bg-orange-500 hover:text-white text-base font-semibold"
                  >
                    <Code className="w-4 h-4 mr-1" />
                    Add Problem
                  </Link>
                </li>
              )}
              <li>
                <LogoutButton className="hover:bg-orange-500 hover:text-white">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </LogoutButton>
              </li>
            </ul>
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
