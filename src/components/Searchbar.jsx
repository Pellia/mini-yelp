const Searchbar = () => {
    return (
        <div className="flex justify-center my-4">
            <input type="text" name="Search" id="search" className="border border-neutral-500 rounded-lg w-96 h-8 p-2 bg-white" placeholder="Search for restaurant..." />
        </div>
    );
};

export default Searchbar;
