import React from 'react'
import Flexx from './Flexx'
import { AiFillCar } from 'react-icons/ai';

const Facility = ({text, className}) => {
  return (
    <>
    <Flexx className="items-center gap-2">
    <AiFillCar/>
    <p className={`font-pop font-normal text-sm ${className}`}>{text}</p>
    </Flexx>
    </>
  )
}

export default Facility