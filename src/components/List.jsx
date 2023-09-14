import React from 'react'

const List = ({text, className}) => {
  return (
    <li className={`font-pop font-normal font-sm ${className}`}>{text}</li>
  )
}

export default List