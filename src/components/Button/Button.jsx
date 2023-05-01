import React from 'react'

const Button = ({type = 'button', children, onClick, className}) => {
  return (
       <button className={className} type={type} onClick={onClick}>
        {children}
       </button>                     
  )
}

export default Button