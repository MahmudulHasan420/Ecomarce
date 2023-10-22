import React from 'react'
import Flexx from './Flexx'

const Aboutpart = ({heading , text , className}) => {
  return (
  <>
    <h3 className={`font-pop font-bold text-[25px]  ${className}`}>{heading}</h3>
    <p className={`font-pop font-normal text-base mt-3 mb-32`}>{text}</p>
  </>
  )
}

export default Aboutpart