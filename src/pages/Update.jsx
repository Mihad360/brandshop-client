/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import {useState} from 'react'

const Update = () => {

    const update = useLoaderData()
    // console.log(update)
    const { _id } = update;

    const [options, setOptions] = useState([
        'Toyota CH-R', 'Rav4', 'Camry', 'SUV', 'Luxury Compact SUV',
        'Model-5 Sedan', 'XS-Model', 'Sports car', 'Sports-X', 'Sports-car', 'Luxury', 'M2', 'X-5'
    ])
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleInputClick = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowOptions(false);
    };

    const handleupdate = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const brandName = form.brand.value;
        const price = form.price.value;
        const type = form.type.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const updatecar = { name, photo, brandName, price, type, description, rating }
        // console.log(details)

        fetch(`https://assignment-10-server-dsjeonh5x-montasir-mihads-projects.vercel.app/cars/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatecar)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Done!',
                        'Updated successfully',
                        'success'
                    )
                    form.reset();
                }
            })
    }

    return (
        <div className="dark:bg-black dark:text-white pb-12">
            <form onSubmit={handleupdate}>
                <h1 className="text-center text-3xl font-semibold py-8">Update your details</h1>
                <div className="border bg-emerald-100 lg:w-[800px] mx-auto py-10 dark:bg-black dark:text-white">
                    <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-10 lg:w-[800px] rounded-xl ">
                        <div className="space-y-5 mx-auto">
                            <input className="border border-gray-500 rounded-md px-3 py-2 md:w-[300px] dark:bg-gray-500" type="text" name="photo" placeholder="Image URL" defaultValue={update.photo} />
                            <br />
                            <input className="border border-gray-500 rounded-md px-3 py-2 md:w-[300px] dark:bg-gray-500" type="text" name="name" placeholder="Name" defaultValue={update.name} />
                            <br />
                            <input className="border border-gray-500 rounded-md px-3 py-2 md:w-[300px] dark:bg-gray-500" type="text" name="brand" placeholder="Brand Name" defaultValue={update.brandName} />
                            <br />
                            <div className="relative inline-block">
                                <input
                                    type="text"
                                    className="border border-gray-500 rounded-md px-3 py-2 dark:bg-gray-500 md:w-[300px]" name="type" defaultValue={update.type} placeholder="Product type"
                                    value={selectedOption}
                                    onClick={handleInputClick}
                                    readOnly
                                />

                                {showOptions && (
                                    <ul className="absolute z-10 border p-2 mt-1 w-full bg-white dark:bg-black dark:text-white">
                                        {options.map((option, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handleOptionClick(option)}
                                                className="cursor-pointer hover:bg-gray-200 p-1"
                                            >
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div className="space-y-5 mx-auto">
                            <input className="border border-gray-500 rounded-md px-3 py-2 md:w-[300px] dark:bg-gray-500" type="text" name="price" placeholder="Price" defaultValue={update.price} />
                            <br />
                            <input className="border border-gray-500 rounded-md px-3 py-2 md:w-[300px] dark:bg-gray-500" type="text" name="description" placeholder="Short description" defaultValue={update.description} />
                            <br />
                            <input className="border border-gray-500 rounded-md px-3 py-2 md:w-[300px] dark:bg-gray-500" type="text" name="rating" placeholder="Rating" defaultValue={update.rating} />
                        </div>

                    </div>
                    <div className="text-center mt-10">

                        <input className="btn btn-accent px-10" type="submit" value="Submit" />

                    </div>
                </div>
            </form>
        </div>
    );
};

export default Update;