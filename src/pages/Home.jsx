import RestaurantCard from "../components/RestaurantCard";
import Searchbar from "../components/Searchbar";

const Home = () => {
    return (
        <div>
            <Searchbar />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </div>
    );
};

export default Home;
