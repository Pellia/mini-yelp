import Logo from "./Logo";
import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";

const MainLayout = () => {
    return (
        <>
            <NavBar />
            <Logo />
            <Outlet />
        </>
    );
};

export default MainLayout;
