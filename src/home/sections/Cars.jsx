/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react";
import { motion } from "framer-motion"

const Cars = ({ car }) => {

    const { id, name, image } = car

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    const list = { hidden: { opacity: 0 } }
const item = { hidden: { x: -10, opacity: 0 } }

    return (
        <motion.div initial={{ scale: 0 }}
        animate={{ rotate: 400, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }} whileHover={{ scale: 1.5 }}  data-aos='flip-up' className="">
            <Link to={`/details/${id}`}>
                <div className="card h-64 md:w-72 bg-base-100 shadow-xl image-full">
                    <figure><img className="w-full" src={image} alt="car" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">{name}</h2>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default Cars;