import React, { Children } from 'react'

const Flexx = ({className,children}) => {
  return (
    <div className={`flex ${className}`}>
        {children}
    </div>
  )
}

export default Flexx