/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Cars = ({ car }) => {

    const { id, name, image } = car

    return (
        <div className="">
            <Link to={`/details/${id}`}>
                <div className="card h-64 md:w-72 bg-base-100 shadow-xl image-full">
                    <figure><img className="w-full" src={image} alt="car" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">{name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Cars;