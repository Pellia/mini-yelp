import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import Searchbar from "../components/Searchbar";
import dummyRestaurant from "../data/Dummy";

const Home = () => {
    const url = "https://mocki.io/v1/3747a7fc-7bea-434d-bcf8-e86321cbd5c5";
    const [restaurantData, setRestaurantData] = useState(null);
    const [loading, setLoading] = useState(false);

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
            <Searchbar />
            {loading && <h1>LOADING...</h1>}
            {restaurantData &&
                restaurantData.map((restaurant, index) => (
                    <div key={index}>
                        <RestaurantCard data={restaurant} />
                    </div>
                ))}
        </div>
    );
};

export default Home;
