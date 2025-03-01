const Searchbar = () => {
    return (
        <div className="flex justify-center my-4">
            <form action="" className="flex gap-5">
                <input type="text" name="Search" id="search" className="border border-neutral-500 rounded-lg w-96 h-8 p-2 bg-white" placeholder="Search for restaurant by city or tag..." />
                <div className="flex gap-2">
                    <div className="flex">
                        <input type="radio" name="city-tag" id="city" value="city" />
                        <label htmlFor="city">City</label>
                    </div>
                    <div>
                        <input type="radio" name="city-tag" id="tag" value="tag" />
                        <label htmlFor="tag">Tag</label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Searchbar;
