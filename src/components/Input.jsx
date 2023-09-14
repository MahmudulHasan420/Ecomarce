import React from 'react'

const Input = ({type, placeholder,title}) => {
  return (
    <>
    <h5 className='font-bold text-base font-pop' >{title}</h5>
     <input type={type} className='border-b border-solid border-offwhite placeholder:font-pop placeholder:font-normal placeholder:text-sm mb-6 py-2 w-full' placeholder={placeholder}/>
    </>
   
    
  )
}

export default Input