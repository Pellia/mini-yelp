import { Link } from "react-router-dom";

const RestaurantCard = ({ data }) => {
    return (
        <div className="bg-white p-4 w-96 rounded-2xl border border-neutral-300">
            <p className="font-bold text-xl">{data.name}</p>
            <div className="flex justify-between mt-15">
                <div className="flex gap-2">
                    {data.city.map((c, i) => (
                        <p key={i} className="p-1 bg-green-400 text-white rounded-md">
                            {c}
                        </p>
                    ))}
                </div>
                <div className="flex gap-2">
                    {data.tag.map((t, i) => (
                        <p key={i} className="p-1 bg-blue-400 text-white rounded-md">
                            {t}
                        </p>
                    ))}
                </div>
            </div>
            <div className="flex justify-end">
                <Link to={`details/${data.name}`}>See more...</Link>
            </div>
        </div>
    );
};

export default RestaurantCard;
