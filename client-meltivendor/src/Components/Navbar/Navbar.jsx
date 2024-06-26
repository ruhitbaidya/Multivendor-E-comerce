import { CiMenuBurger } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import {Link} from "react-router-dom"
import "./styles.css"
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 grid grid-cols-7">
                <div className="navbar-start col-span-3 md:col-span-1">
                    <a className="btn btn-ghost text-xl">Ruhit</a>
                </div>
                <div className="navbar-center col-span-3 hidden md:flex">
                    <div className="w-full">
                        <form>
                            <div className="w-full">
                                <label className="input input-bordered flex items-center gap-2 w-full">
                                    <input type="text" className="w-full" placeholder="Search" />
                                    <FaSearch />
                                </label>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="navbar-end col-span-4 md:col-span-3 w-full items-center">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="m-1 lg:hidden"><CiMenuBurger className="text-[30px]" /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><button className="text-[28px]"><FaShoppingCart /></button></li>
                            <li><button className="border px-[30px] py-[12px] ml-[10px]">Login</button></li>
                            <li><button className="border px-[30px] py-[12px] ml-[10px]">Register</button></li>
                            <li>
                                <label className="input input-bordered flex items-center gap-2 w-full">
                                    <input type="text" className="w-full" placeholder="Search" />
                                    <FaSearch />
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><button className="text-[28px]"><FaShoppingCart /></button></li>
                            <li><button className="border px-[30px] py-[12px] ml-[10px]">Login</button></li>
                            <li><button className="border px-[30px] py-[12px] ml-[10px]">Register</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <MenuItems />
        </div>
    )
}



const MenuItems = () => {
    return <>
        <div className="text-center flex justify-center">
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="m-1 lg:hidden"><CiMenuBurger className="text-[30px]" /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   <li><Link>Home</Link></li>
                   <li><Link>About</Link></li>
                   <li><Link>Product</Link></li>
                   <li><Link>Shipping</Link></li>
                   <li><Link>Contact</Link></li>
                </ul>
            </div>
        </div>
    </>
}


export default Navbar