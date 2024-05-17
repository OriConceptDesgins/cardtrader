import React from 'react'
import { Link } from 'react-router-dom'


export default function NavLink({sx={color: "red"},destination,children}) {
  return (
    <Link to={destination} style = {{textDecoration:"none", ...sx}}>
      {children}
    </Link>
  )
}
