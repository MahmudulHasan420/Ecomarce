import React from 'react'
import {HiArrowSmRight} from 'react-icons/hi'
const NextArrows = (props) => {

    const { className, onClick } = props;

  return (
    <div
    className={`flex justify-center items-center w-16 h-16 rounded-full bg-[#979797] ${className}`}
    onClick={onClick}
  ><HiArrowSmRight/></div>
  )
}

export default NextArrows