import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='logo flex'>
      <Link to="/">
        <img 
          src='https://edteam-media.s3.amazonaws.com/app/utils/logo/isotipo-color.svg' alt="Logo eCommerce" 
        />
      </Link>
      
    </div>
  )
}

export default Logo
