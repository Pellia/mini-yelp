const Login = () => {
    return (
        <div>
            <div className="p-4">
                <h1 className="text-2xl font-bold">Login</h1>
                <input type="text" placeholder="Username" className="border p-2 w-full mb-2" />
                <input type="password" placeholder="Password" className="border p-2 w-full mb-2" />
                <button className="bg-blue-500 text-white p-2 w-full">Login</button>
            </div>
        </div>
    );
};

export default Login;
