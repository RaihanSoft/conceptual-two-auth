import { NavLink } from "react-router-dom"

const Navbar = () => {
    const links =
        <>
            <div  className="text-xl font-bold space-x-4" >
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'text-blue-500 font-bold' : 'text-gray-700'}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/all-teethment"
                    className={({ isActive }) =>
                        isActive ? 'text-blue-500 font-bold' : 'text-gray-700'}
                >
                    All Teethment
                </NavLink>

                <NavLink
                    to="/appointment-profile"
                    className={({ isActive }) =>
                        isActive ? 'text-blue-500 font-bold' : 'text-gray-700'}
                >
                    Appointment
                </NavLink>
                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        isActive ? 'text-blue-500 font-bold' : 'text-gray-700'}
                >
                    Profile
                </NavLink>
            </div>
        </>

    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">TEETH WIZARD</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-neutral rounded-none ">Login</a>
            </div>
        </div>
    )
}

export default Navbar