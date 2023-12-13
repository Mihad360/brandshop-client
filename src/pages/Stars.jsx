/* eslint-disable react/prop-types */
import { AiOutlineStar } from 'react-icons/ai';
import { FaStarHalfAlt, FaStar } from 'react-icons/fa';

const Stars = ({ stars }) => {

    const ratingstar = Array.from({ length: 5 }, (e, index) => {
        let number = index + 0.5;

        return (

            <span className='text-lg' key={index}>
                {
                    stars >= index + 1
                        ? <FaStar></FaStar>
                        : stars >= number
                            ? <FaStarHalfAlt></FaStarHalfAlt>
                            : <AiOutlineStar></AiOutlineStar>
                }
            </span>
        );
    })

    return (
        <div className='flex items-center text-amber-500'>
            {ratingstar}
        </div>
    )


};

export default Stars;