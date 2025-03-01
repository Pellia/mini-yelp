import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import MainLayout from "./components/MainLayout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

const App = () => {
    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="/details/:id" element={<Details />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
