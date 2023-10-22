import React from 'react'
 import {HiArrowSmLeft} from 'react-icons/hi'

const PreveArrows = (props) => {
    const { className, onClick } = props;
  return (
    <div
    className={`flex justify-center items-center w-16 h-16 rounded-full bg-[#979797] cursor-pointer ${ props.class}`}
    onClick={onClick}
  ><HiArrowSmLeft/></div>
  )
}

export default PreveArrows