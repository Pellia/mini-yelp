import { useState } from "react";

const Searchbar = ({ handleParameter, handleSearch }) => {
    // const [parameter, SetParameter] = useState("name");

    // const handleParameter = (e) => {
    //     SetParameter(e.target.value);
    // };

    // const handleSearch = () => {
    //     if (parameter === "name") {
    //         console.log(parameter);
    //     } else if (parameter === "tag") {
    //         console.log(parameter);
    //     } else if (parameter === "city") {
    //         console.log(parameter);
    //     }
    // };

    return (
        <div className="flex justify-center my-4">
            <form action="" className="flex gap-5">
                <input onChange={handleSearch} type="text" name="Search" id="search" className="border border-neutral-300 rounded-lg w-96 h-12 p-2 bg-white text-lg" placeholder="Search..." />
                <div className="flex gap-4 items-center" onChange={handleParameter}>
                    <div>
                        <input type="radio" name="city-tag" id="name" value="name" defaultChecked />
                        <label htmlFor="name" className="text-lg">
                            {" "}
                            Name
                        </label>
                    </div>
                    <div>
                        <input type="radio" name="city-tag" id="city" value="city" />
                        <label htmlFor="city" className="text-lg">
                            {" "}
                            City
                        </label>
                    </div>
                    <div>
                        <input type="radio" name="city-tag" id="tag" value="tag" />
                        <label htmlFor="tag" className="text-lg">
                            {" "}
                            Tag
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Searchbar;
