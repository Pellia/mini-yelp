const Login = () => {
    return (
        <div className="flex justify-center">
            <div className="bg-white rounded-xl p-4 border border-neutral-300 flex flex-col items-center gap-2 w-[35%]">
                <h1 className="text-2xl font-bold">Login</h1>
                <input type="text" placeholder="Username" className="border border-neutral-300 rounded-lg w-96 h-12 p-2 bg-white text-lg" />
                <input type="password" placeholder="Password" className="border border-neutral-300 rounded-lg w-96 h-12 p-2 bg-white text-lg" />
                <button className="bg-pink-300 text-white font-bold p-2 w-96 rounded-xl">Login</button>
                <p className="underline">Forgot Password</p>
            </div>
        </div>
    );
};

export default Login;
