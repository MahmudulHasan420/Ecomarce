import React from 'react'

const ProductHeading = ({text,className}) => {
  return (
    <h4 className={`font-pop font-bold text-xl ${className}`}>{text}</h4>
  )
}

export default ProductHeading