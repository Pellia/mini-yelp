import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const url = "";
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    const dummyRes = {
        id: 1,
        name: "Sushi Heaven",
        cityId: 1,
        address: "123 Main Street 1",
        phone: "123-456-7890",
        email: "newrestaurant@example.com",
        updatedAt: "2025-03-01T14:00:17.044Z",
        createdAt: "2025-03-01T14:00:17.044Z",
        tag: ["chinese", "japanese"],
        city: ["hamburg", "berlin"],
        comments: ["i love it", "hate it"],
        reviews: [
            {
                username: "user1",
                comment: "i love it",
                rating: "4/5",
            },
            {
                username: "user2",
                comment: "good",
                rating: "5/5",
            },
            {
                username: "user3",
                comment: "nope",
                rating: "3/5",
            },
        ],
    };

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setRestaurant(data));
    }, [id]);

    return (
        <div className="flex justify-center">
            <div className="max-w-3xl">
                <hr className="border-2 border-neutral-200 mb-2 " />
                {dummyRes && (
                    <div className="flex flex-col items-center gap-4">
                        <h2 className="text-4xl font-bold">{dummyRes.name}</h2>
                        <div className="flex gap-2 font-bold">
                            <p>Address: {dummyRes.address}</p>
                            <p> | </p>
                            <p>Phone: {dummyRes.phone}</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, dignissimos cum accusantium enim assumenda ab totam officiis, maiores similique, autem sunt nulla officia
                            nostrum ea corrupti porro earum voluptatibus voluptatum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod nostrum et sequi qui in eveniet dolorem sit eos
                            ullam facilis dolores, vel libero dolorum fugit, consectetur molestias repellat magnam excepturi?
                        </p>
                        <div className="flex gap-6 items-center">
                            <h3>Location</h3>
                            <div className="flex gap-2">
                                {dummyRes.city.map((c, i) => (
                                    <p key={i} className="p-1 bg-pink-400 text-white rounded-md">
                                        {c}
                                    </p>
                                ))}
                            </div>
                            <h3>Tags</h3>
                            <div className="flex gap-2">
                                {dummyRes.tag.map((t, i) => (
                                    <p key={i} className="p-1 bg-purple-400 text-white rounded-md">
                                        {t}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <h3>Map</h3>
                        <div className="border border-neutral-300 rounded-xl bg-white w-96 h-96">Leaflet</div>
                        <h3>Comments</h3>
                        {dummyRes.reviews.map((user, i) => (
                            <div key={i} className="bg-white border border-neutral-300 p-2 rounded-xl w-96">
                                <p className="mb-3">User: {user.username}</p>
                                <p>Comment</p>
                                <div className="border-neutral-300 border p-4 rounded-2xl mb-3">
                                    <p>{user.comment}</p>
                                </div>
                                <div className="flex justify-end">
                                    <p>{user.rating} Stars</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Details;
