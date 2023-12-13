import { Link, useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from 'react'

const Details = () => {

    const [getcar, setGetcar] = useState([])
    const { id } = useParams()

    const details = useLoaderData()
    // console.log(details)

    useEffect(() => {
        fetch('/cars.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const one = data.find(detail => parseFloat(detail.id) === parseFloat(id))
                // console.log(one)
                const get = details.filter(getdata => getdata.brandName === one.name)
                setGetcar(get)
            })
    }, [])

    return (
        <div>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full h-[700px]">
                    <img src='https://i.ibb.co/3d4GnRV/2015-ford-mustang-50-year-limited-edition-100463869-h.jpg' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[700px]">
                    <img src="https://i.ibb.co/gtdGv7M/img-1232012345-1534272248378.webp" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[700px]">
                    <img src="https://i.ibb.co/qgM1f5b/2022-lucid-air-202-1633523047.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[700px]">
                    <img src="https://i.ibb.co/FmNDgjg/MY21-Avalon-XSENightshade-001-1500x900.webp" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-20 dark:bg-black dark:text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {
                        getcar.map(get => <div key={get._id}>
                            <div>
                                <div className="card mx-5 md:mx-0 md:w-[500px] bg-base-100 border dark:bg-black dark:text-white">
                                    <figure className="">
                                        <img src={get.photo} alt="Toyota" className="w-full h-[300px]" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{get.name}</h2>
                                        <p>Brand: {get.brandName}({get.type})</p>

                                        <div className="flex items-center gap-4 pt-5">
                                            <div className="card-actions">
                                                <Link to={`/detail/${get._id}`}>
                                                    <button className="btn btn-accent">Details</button>
                                                </Link>
                                            </div>
                                            <div className="card-actions inline">
                                                <Link to={`/update/${get._id}`}>
                                                    <button className="btn btn-accent">Update</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Details;