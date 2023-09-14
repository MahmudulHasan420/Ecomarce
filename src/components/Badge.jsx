import React from 'react'

const Badge = ({text,className}) => {
  return (
    <button className={`font-pop font-bold text-white text-sm bg-black py-2 px-8 ${className}`}>{text}</button>
  )
}

export default Badge