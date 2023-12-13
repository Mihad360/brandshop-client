import Banner from "./header/Banner";
import { useLoaderData } from 'react-router-dom'
import Cars from "./sections/Cars";
import Sectionone from "./sections/Sectionone";
import Sectiontwo from "./sections/Sectiontwo";

const Home = () => {

    const cars = useLoaderData()

    return (
        <div className="dark:bg-black dark:text-white">
            <div>
                <Banner></Banner>
            </div>
            <h1 className="text-3xl font-bold text-center py-16">Our Cars</h1>
            <div className="flex justify-center pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-0">
                    {
                        cars.map(car => <Cars key={car.id} car={car}></Cars>)
                    }
                </div>
            </div>
            <div>
                <Sectionone></Sectionone>
            </div>
            <div>
                <div className="px-5 md:px-0  ">
                    <h1 className="justify-center text-2xl flex items-center font-semibold text-black dark:text-white">Service we provide |   <span><button className="btn btn-neutral">View all services</button></span></h1>
                </div>
                <Sectiontwo></Sectiontwo>
            </div>
        </div>
    );
};

export default Home;