import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import Searchbar from "../components/Searchbar";

const Home = () => {
    // const url = "https://mocki.io/v1/1b354244-1929-465e-b582-25f559a4fd04";
    const url = "https://mocki.io/v1/93eb474e-9334-4dae-9d20-bac529ae19b3";
    const [restaurantData, setRestaurantData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [parameter, SetParameter] = useState("name");

    const handleParameter = (e) => {
        SetParameter(e.target.value);
    };

    const handleSearch = () => {
        if (parameter === "name") {
            console.log(parameter);
        } else if (parameter === "tag") {
            console.log(parameter);
        } else if (parameter === "city") {
            console.log(parameter);
        }
    };

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setRestaurantData(data);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <Searchbar handleParameter={handleParameter} handleSearch={handleSearch} />
            {loading && <h1>LOADING...</h1>}
            <div className="flex flex-col gap-3 items-center">
                {restaurantData &&
                    restaurantData.map((restaurant, index) => (
                        <li key={index} className="list-none">
                            <RestaurantCard data={restaurant} />
                        </li>
                    ))}
            </div>
        </div>
    );
};

export default Home;
