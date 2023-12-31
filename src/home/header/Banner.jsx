import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react";
import { motion } from "framer-motion"
const Banner = () => {

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])

    return (
        <div style={{
            backgroundImage: 'url("https://i.ibb.co/mSFTPhD/2020-Ford-Mustang-4-banner.jpg")'
        }} className="bg-cover bg-no-repeat bg-center">
            <div  className=" py-64 dark:bg-black dark:text-white">
                <motion.div whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 1.1 }}
  drag="x"
  dragConstraints={{ left: -100, right: 100 }} data-aos='fade-right' className="">
                    <h1 className="text-4xl font-semibold text-yellow-500 text-center md:pr-[480px] px-5 md:px-0 uppercase">Welcome to the <br /> JAGUAR Automotive collection</h1>
                    <p className="md:pr-[480px] px-5 md:px-0 text-center text-white font-medium text-lg pt-3">get your best <span className="text-fuchsia-500 font-bold">Car on 20% off</span></p>
                </motion.div>
                <div>
                    {/* <img className="rounded-xl" src="https://i.ibb.co/Y2B7FQh/bmw-m5-showroom-detail-macro-lens-1003533-395.png" alt="" /> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;