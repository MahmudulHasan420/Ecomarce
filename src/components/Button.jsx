import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`font-pop font-bold text-white text-sm bg-black py-4 px-12 border border-solid border-transparent ${className}`}>{text}</button>
  )
}

export default Button