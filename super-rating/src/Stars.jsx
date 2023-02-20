import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
const Stars = ({setCount, count }) => {
    const ratingStar = Array.from({ length: 5 }, (element, i) => {
        let number = i + 0.5;
        return (
            <div key={i} onMouseOver={e => setCount(i + 1)}>
                {count >= i + 1 ? (
                    <FaStar className='text-yellow-400' />
                ) : count >= number ? (
                    <FaStarHalfAlt className='text-yellow-400' />
                ) : (
                    <AiOutlineStar className='text-yellow-400' />
                )}
            </div>
        )
    })
    return (
        <div className='flex gap-5 cursor-pointer'>
            {ratingStar}
        </div>
    )
}

export default Stars