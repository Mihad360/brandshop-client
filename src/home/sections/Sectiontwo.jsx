/* eslint-disable react/no-unescaped-entities */
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react";
const Sectiontwo = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
    return (
        <div data-aos='zoom-in-up' className="flex justify-center py-12 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
                <div className="card card-compact max-w-[400px] bg-base-100 shadow-xl dark:bg-black dark:text-white">
                    <figure><img className="w-full h-60" src="https://i.ibb.co/VwvCT07/istockphoto-842450026-612x612.jpg" alt="Coating" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Nano Ceramic Coating</h2>
                        <p>Nano ceramic coating is a thin, protective layer applied to vehicles or surfaces, enhancing gloss, durability, and resistance to scratches, UV rays, and contaminants.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-accent">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact max-w-[400px]  bg-base-100 shadow-xl dark:bg-black dark:text-white">
                    <figure><img className="w-full h-60" src="https://i.ibb.co/5rHXKPZ/istockphoto-1415036627-612x612.jpg" alt="Coating" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Auto Detailing</h2>
                        <p>Auto detailing is a meticulous process of cleaning, restoring, and enhancing a vehicle's appearance, focusing on every detail, from paint to interiors.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-accent">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact max-w-[400px]  bg-base-100 shadow-xl dark:bg-black dark:text-white">
                    <figure><img className="w-full h-60" src="https://i.ibb.co/Nrvw6rz/download-3.jpg" alt="Coating" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Full service wash</h2>
                        <p>A full-service wash is a comprehensive car cleaning package, including exterior cleaning, interior vacuuming, window cleaning, and often minor detailing services.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-accent">View Details</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Sectiontwo;