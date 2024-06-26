import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Root
