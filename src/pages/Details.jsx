import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const url = "";
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setRestaurant(data));
    }, [id]);

    return (
        <div>
            <h2>Details</h2>

            {restaurant && (
                <div>
                    <h4>Card</h4>
                    <p>Description</p>
                </div>
            )}
        </div>
    );
};

export default Details;
