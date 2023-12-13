import { NavLink, Link } from "react-router-dom";
import { useContext } from 'react'
import { Authcontext } from "../../authprovider/Authprovider";
import { MdDarkMode } from 'react-icons/md';

const Navbar = () => {

    const { user, logout } = useContext(Authcontext)
    // console.log(user)

    const handlelogout = () => {
        logout()
            .then()
    }

    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark")
    }

    return (
        <div className="">
            <div className="flex flex-col md:flex-row justify-between items-center px-8 py-3 md:py-0 bg-gray-100 dark:bg-black dark:text-white">
                <div className="flex flex-col md:flex-row items-center gap-3 pb-5 md:pb-0">
                    <img className="w-36 h-24 rounded-2xl" src="https://i.ibb.co/yFST9nM/313.png" alt="" />
                    {/* <h1 className="text-2xl font-bold text-black uppercase">Automotive</h1> */}
                </div>
                <div>
                    <ul className="flex flex-col md:flex-row items-center gap-5 md:gap-3 pb-7 md:pb-0">
                        <li className=" uppercase">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "btn btn-accent font-semibold" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="uppercase">
                            <NavLink
                                to="/addproduct"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "btn btn-accent font-semibold" : ""
                                }
                            >
                                Add product
                            </NavLink>
                        </li>
                        <li className="uppercase">
                            <NavLink
                                to="/carts"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "btn btn-accent font-semibold" : ""
                                }
                            >
                                My cart
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    {
                        user && <div className="flex items-center gap-3">
                            <p className="text-xl font-bold text-black dark:text-white">{user?.displayName}</p>
                            <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
                        </div>
                    }
                </div>
                <div className="flex items-center gap-6">
                    <div className="">
                        <button onClick={toggleTheme} className="text-xl"><MdDarkMode></MdDarkMode></button>
                    </div>
                    <div>
                        {
                            user ? <Link>
                                <button onClick={handlelogout} className="btn btn-accent">Sign out</button>
                            </Link> : <Link to='/login'>
                                <button className="btn btn-accent">Login</button>
                            </Link>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;