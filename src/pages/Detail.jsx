import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Stars from "./Stars";


const Detail = () => {
    const [getcar, setCar] = useState({})

    const loader = useLoaderData()
    // console.log(loader)
    const { id } = useParams()
    const cars = loader.find(car => parseFloat(car._id) === parseFloat(id))
    // console.log(cars)

    useEffect(() => {
        setCar(cars)
    }, [])

    // eslint-disable-next-line no-unused-vars
    const { name, photo, brandName, type, description, price, rating, _id } = cars

    const handleadd = () => {
        // eslint-disable-next-line no-unused-vars
        const { name, photo, brandName, type, description, price, rating, _id} = cars
        fetch('https://assignment-10-server-dsjeonh5x-montasir-mihads-projects.vercel.app/addcars', {
            method: 'POST',
            headers: {
            'content-type': 'application/json'
        },
            body: JSON.stringify(cars)
        })
        .then(res => res.json())
    .then(data => {
        // console.log(data)
        if(data.insertedId){
            Swal.fire(
                'Done!',
                'Your cart added successfully',
                'success'
              )
        }
    })
    }

return (
    <div className="flex justify-center py-10 px-5 lg:px-0 dark:bg-black dark:text-white">
        <div className="card md:w-[700px] bg-base-100 border dark:bg-black dark:text-white">
            <figure className="">
                <img src={getcar.photo} alt="cars" className="w-full h-[400px] md:h-[500px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{getcar.name}</h2>
                <p className="text-lg font-medium">Brand: {getcar.brandName}({getcar.type})</p>
                <p className="text-base">{getcar.description}</p>
                <Stars stars={getcar.rating}></Stars>
                <p className="text-lg font-semibold">Price: {getcar.price}</p>

                <div className="flex items-center gap-4 pt-5">
                    <div className="card-actions">
                        <Link>
                            <button className="btn btn-accent">Buy</button>
                        </Link>
                    </div>
                    <div className="card-actions inline">
                        <Link>
                            <button onClick={handleadd} className="btn btn-accent">Add to cart</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default Detail;