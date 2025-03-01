import Logo from "./Logo";
import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";

const MainLayout = () => {
    return (
        <>
            <Logo />
            <NavBar />
            <Outlet />
        </>
    );
};

export default MainLayout;
