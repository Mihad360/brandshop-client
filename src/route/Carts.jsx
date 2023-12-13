
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Carts = () => {

    const loader = useLoaderData()
    // console.log(loader)
    const [users, setUsers] = useState(loader)

    const handledelete = _id => {
        // console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this??",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-10-server-dsjeonh5x-montasir-mihads-projects.vercel.app/addcars/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = users.filter(user => parseFloat(user._id) !== parseFloat(_id))
                            setUsers(remaining)
                        }
                    })

            }
        })
    }

    return (
        <div className="flex justify-center py-12 dark:bg-black dark:text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {
                    users.map(load => <div key={load._id}>
                        <div className="card lg:w-96 bg-base-100 shadow-xl mx-5 lg:mx-0 dark:bg-black dark:text-white">
                            <figure><img className="w-full h-[300px]" src={load.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">{load.name}</h2>
                                <p className="text-lg font-medium">Brand: {load.brandName}</p>
                                <p>{load.description}</p>
                                <div className="card-actions justify-end">
                                    <Link>
                                        <button onClick={() => handledelete(load._id)} className="btn btn-primary">Delete</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Carts;
