import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const url = "";
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    const dummyRes = {
        name: "rest1",
        tag: ["chinese", "japanese"],
        city: ["hamburg", "berlin"],
        comments: ["i love it", "hate it"],
    };

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setRestaurant(data));
    }, [id]);

    return (
        <div>
            <h2>Details</h2>

            {dummyRes && (
                <div>
                    <p>{dummyRes.name}</p>
                </div>
            )}
        </div>
    );
};

export default Details;
