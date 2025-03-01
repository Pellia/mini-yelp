import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="bg-neutral-800 text-white font-bold">
            <div className="flex justify-between items-center mx-5">
                <h2 className="text-3xl bg-gradient-to-r from-pink-400 via-pink-300 to-indigo-400 inline-block text-transparent bg-clip-text">
                    <Link to="/">Mini Yelp</Link>
                </h2>
                <nav>
                    <ul className="flex gap-5 justify-center p-2 text-xl">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
